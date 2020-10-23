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
*If you don't have npm install take a look at [this site](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).*

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
│  input  │ 0 │ 1 │ 0 │ 1 │
│ output  │ 1 │ 1 │   │   │
└─────────┴───┴───┴───┴───┘
Answer: Correct

Stats:
┌────────────────┬───────┬─────────────┐
│    (index)     │ total │ consecutive │
├────────────────┼───────┼─────────────┤
│ correctAnswers │  91   │      3      │
│  wrongAnswers  │  103  │      0      │
│   iterations   │  194  │             │
└────────────────┴───────┴─────────────┘
Success rate: 47%
```
