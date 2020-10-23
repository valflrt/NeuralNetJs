const id = require("./id");
const toolbox = require("./toolbox");

// neuron constructor

class Neuron {
	constructor() {
		this.id = id();

		this.bias = 0;
		this.output = new Number();
		this.delta = new Number();
		this.error = new Number();

		this.outCons = new Array();
		this.inCons = new Array();
	};

	return() {
		return {
			id: this.id,
			delta: this.delta,
			output: this.output,
			error: this.error,
			bias: this.bias
		};
	};

	addOutCon(con) {
		this.outCons.push(con);
	};

	addInCon(con) {
		this.inCons.push(con);
	};

	setRandomBias() {
		this.bias = Math.random();
	};

	setBias(value) {
		this.bias = value;
	};

	setOutput(value) {
		this.output = value;
	};

	setDelta(value) {
		this.delta = value;
	};

	setError(value) {
		this.error = value;
	};
};

// layer constructor

class Layer {
	constructor(amountOfNeurons) {
		this.neurons = this.createNeuron(amountOfNeurons);
	};

	createNeuron(amount) {
		let array = new Array();

		for (let i = 0; i < amount; i++) {
			array.push(new Neuron());
		};

		return array;
	};
};

// neuron constructor

class Network {
	constructor(args) {
		this.layers = new Array();
		this.createLayers(args.layers);
		this.connectLayers();

		this.learningRate = args.learningRate || new Number(0.3);
		this.momentum = args.momentum || new Number(0.1);

		this.iterations = 0;
	};

	setParams(args) {
		this.learningRate = args.learningRate || this.learningRate;
		this.momentum = args.momentum || this.momentum;

		this.iterations = args.iterations || this.iterations;
	};

	createLayers(layers) {
		layers.forEach((amountNeurons) => {
			const layer = new Layer(amountNeurons);

			this.layers.push(layer);

			layer.neurons.forEach(neuron => {
				neuron.setRandomBias();
			});
		});
	};

	connectLayers() {

		for (let layerIndex = 1; layerIndex < this.layers.length; layerIndex++) {

			let currentLayer = this.layers[layerIndex];
			const prevLayer = this.layers[layerIndex - 1];

			for (let currentLayerIndex = 0; currentLayerIndex < currentLayer.neurons.length; currentLayerIndex++) {
				for (let prevLayerIndex = 0; prevLayerIndex < prevLayer.neurons.length; prevLayerIndex++) {
					const con = new Connection(prevLayer.neurons[prevLayerIndex], currentLayer.neurons[currentLayerIndex]);
					prevLayer.neurons[prevLayerIndex].addOutCon(con);
					currentLayer.neurons[currentLayerIndex].addInCon(con);
				};
			};
		};
	};

	train(input, output) {
		this.activate(input);

		let results = this.inputSigmoid();

		this.calcDeltasSigmoid(output);
		this.adjustWeights();

		this.iterations += 1;

		return results;
	};

	// set output values for input neurons

	activate(values) {
		this.layers[0].neurons.forEach((neuron, index) => {
			neuron.setOutput(values[index]);
		});
	};

	run() {
		return this.inputSigmoid();
	};

	// applying the sigmoid formula to all neuron inputs

	inputSigmoid() {
		for (var layer = 1; layer < this.layers.length; layer++) {
			for (var neuron = 0; neuron < this.layers[layer].neurons.length; neuron++) {
				const bias = this.layers[layer].neurons[neuron].bias;

				const conValue = new Number(this.layers[layer].neurons[neuron].inCons.reduce((total, con) => {
					const value = con.weight * con.from.output;
					return total + value;
				}, 0));

				this.layers[layer].neurons[neuron].setOutput(toolbox.Sigmoid(bias + conValue));
			};
		};

		const outputs = [];

		this.layers[this.layers.length - 1].neurons.forEach(neuron => {
			outputs.push(neuron.output);
		});

		return outputs;
	};

	// calculate the needed change for adjusting the weight of the connections

	calcDeltasSigmoid(targetValue) {

		// "layer--" -> from the last layer to the first

		for (let layer = this.layers.length - 1; layer >= 0; layer--) {
			const currentLayer = this.layers[layer];

			for (let neuron = 0; neuron < currentLayer.neurons.length; neuron++) {
				const currentNeuron = currentLayer.neurons[neuron];
				let output = currentNeuron.output;

				let error = 0;

				if (layer === this.layers.length - 1) {
					error = targetValue[neuron] - output;
				} else {
					for (let k = 0; k < currentNeuron.outCons.length; k++) {
						const currentCon = currentNeuron.outCons[k];
						error += currentCon.to.delta * currentCon.weight;
					};
				};

				currentNeuron.setError(error);
				currentNeuron.setDelta(error * output * (1 - output));
			};
		};
	};

	// adjusting the weights of the connections

	adjustWeights() {
		for (let layer = 1; layer <= this.layers.length - 1; layer++) {
			const currentLayer = this.layers[layer];

			for (let neuron = 0; neuron < currentLayer.neurons.length; neuron++) {
				const currentNeuron = currentLayer.neurons[neuron];
				let delta = currentNeuron.delta;

				for (let i = 0; i < currentNeuron.inCons.length; i++) {
					const currentConnection = currentNeuron.inCons[i];
					let change = currentConnection.change;
					change = (this.learningRate * delta * currentConnection.from.output)
						+ (this.momentum * change);

					currentConnection.setChange(change);
					currentConnection.setWeight(currentConnection.weight + change);
				};

				currentNeuron.setBias(currentNeuron.bias + (this.learningRate * delta));

			};
		};
	};
};

// connection constructor

class Connection {
	constructor(from, to) {
		this.from = from;
		this.to = to;
		this.weight = new Number(Math.random());
		this.change = new Number();
	};

	setWeight(weight) {
		this.weight = weight;
	};

	setChange(change) {
		this.change = change;
	};
};

// module exporting

module.exports.Neuron = Neuron;
module.exports.Layer = Layer;
module.exports.Network = Network;

module.exports.Connection = Connection;