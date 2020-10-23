const { Loop, DisplayResults, AreSameArrays, Clear } = require("./toolbox");
const { Neuron, Layer, Network } = require("./network");
require("colors");

Clear();

// creating the network

const network = new Network({ layers: [4, 6, 6, 2], learningRate: 1, momentum: 0.1 });

// training data

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

// statistics object

let stats = {
	correctAnswers: { total: 0, consecutive: 0 },
	wrongAnswers: { total: 0, consecutive: 0 },
	iterations: { total: 0 }
};

// learning each 100 milliseconds

setInterval(() => {
	Clear();
	const trainingItem = trainingData[Math.floor((Math.random() * trainingData.length))];
	let outputs = network.train(trainingItem.input, trainingItem.output);
	console.log("Learning...".bgCyan.black, "\n");
	console.log("Training item:")
	console.table(trainingItem);

	roundedOutputs = outputs.map((output) => {
		return Math.round(output);
	});

	if (roundedOutputs.join("") === trainingItem.output.join("")) {
		console.log("Answer:", "Correct".bgGreen.black);
		stats.correctAnswers.total++;
		stats.correctAnswers.consecutive++;

		stats.wrongAnswers.consecutive = 0;
	} else {
		console.log("Answer:", "Wrong".bgRed.black);
		stats.wrongAnswers.total++;
		stats.wrongAnswers.consecutive++;

		stats.correctAnswers.consecutive = 0;
	};

	stats.iterations.total++;

	console.log("\nStats:")
	console.table(stats);
	console.log("Success rate:", (Math.round((stats.correctAnswers.total / stats.iterations.total) * 100) + "%").bgGreen.black);
}, 100);

// opptionnals results

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