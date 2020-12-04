# NeuralNetJs

NeuralNetJs is a simple artificial neural network.

You can find a code example in [main.js](./main.js).

## Installation

First, clone this repository:
```Shell
git clone https://github.com/valflrt/NeuralNetJs.git
```

Then, install the dependencies using:
```Shell
npm install
```
> *If you don't have npm installed on your computer, take a look at [this site](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).*


## Starting

You can now start the network's learning:
```Shell
npm start
```


## Output

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
