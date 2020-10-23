const toolbox = require("./toolbox");

module.exports = () => {
	return "#####-#####-#####".replace(/#/g, () => {
		return toolbox.Random(0, 9);
	});
};