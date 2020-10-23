const { For, DisplayResults, AreSameArrays, Clear } = require("./toolbox");
const { Neuron, Layer, Network } = require("./network");
require("colors");

Clear();

const network = new Network({ layers: [4, 6, 6, 2], learningRate: 1, momentum: 0.1 });

const trainingData = [
	{
		input: [0, 0, 0, 0],
		output: [0, 0]
	}, {
		input: [1, 0, 0, 0],
		output: [1, 0]
	}, {
		input: [1, 0, 1, 0],
		output: [1, 1]
	}, {
		input: [0, 1, 0, 1],
		output: [1, 1]
	}, {
		input: [1, 1, 1, 0],
		output: [0, 1]
	}, {
		input: [1, 1, 1, 1],
		output: [0, 0]
	}, {
		input: [0, 1, 1, 0],
		output: [1, 1]
	}, {
		input: [1, 0, 0, 1],
		output: [1, 1]
	}
];

let stats = {
	correctAnswers: 0,
	wrongAnswers: 0,
	iterations: 0
};

setInterval(() => {
	Clear();
	const trainingItem = trainingData[Math.floor((Math.random() * trainingData.length))];
	let outputs = network.train(trainingItem.input, trainingItem.output);
	console.log("Learning...".bgCyan.black, "\n");
	console.table(trainingItem);

	roundedOutputs = outputs.map((output) => {
		return Math.round(output);
	});

	if (roundedOutputs.join("") === trainingItem.output.join("")) {
		console.log("Answer:", "Correct".bgGreen.black);
		stats.correctAnswers++;
	} else {
		console.log("Answer:", "Wrong".bgRed.black);
		stats.wrongAnswers++;
	};

	stats.iterations++;

	console.log("\nStats:")
	console.table(stats);
}, 100);

results = trainingData.map(data => {
	network.activate(data.input);
	let result = network.run();

	let roundedResult = result.map(data => {
		return Math.round(data);
	});

	return {
		input: data.input,
		answer: roundedResult,
		correctAnswer: data.output,
		isTheCorrectAnswer: AreSameArrays(roundedResult, data.output)
	};
});

