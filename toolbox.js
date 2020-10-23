module.exports.Random = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports.Round = (number) => {
	return Math.round(number);
};

module.exports.Sigmoid = (number) => {
	return (1 / (1 + Math.exp(-number)));
};

module.exports.AreSameArrays = (a, b) => {
	if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
		return a.every((value, index) => value === b[index]);
	};
};

module.exports.DisplayResults = (results) => {
	let numberOfCorrectAnswers = 0;
	let numberOfWrongAnswers = 0;

	results.forEach(result => {
		if (result.isTheCorrectAnswer === true) {
			numberOfCorrectAnswers++;
		} else if (result.isTheCorrectAnswer === false) {
			numberOfWrongAnswers++;
		};
	});

	let stats = {
		correctAnswers: numberOfCorrectAnswers,
		wrongAnswers: numberOfWrongAnswers
	};

	console.log("\033c");
	console.table(results);
	console.table(stats);
};

module.exports.Clear = () => {
	console.log("\033c");
};

module.exports.Loop = (iterations, callback) => {
	let index = 0;
	while (index < iterations) {
		callback(index);
	};
};