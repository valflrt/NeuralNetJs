# NeuralNetJs

This is a simple neural network constructor.

## Installation

First, clone this repository:
```
git clone https://github.com/valflrt/NeuralNetJs.git
```

Then, install the dependencies using:
```
npm install
```
*If you don't have npm install take a look [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).*

You can now start the network's learning:
```
npm start
```

Here is a preview of the output:
```
Learning... 

Training item:
┌─────────┬───┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │ 3 │
├─────────┼───┼───┼───┼───┤
│  input  │ 0 │ 0 │ 0 │ 0 │
│ output  │ 0 │ 0 │   │   │
└─────────┴───┴───┴───┴───┘
Answer: Wrong

Stats:
┌────────────────┬────────┐
│    (index)     │ Values │
├────────────────┼────────┤
│ correctAnswers │  120   │
│  wrongAnswers  │  157   │
│   iterations   │  277   │
└────────────────┴────────┘
Success rate: 43.32129963898917 %
```
