# NeuralNetJs

NeuralNetJs is a simple artificial neural network.

In [network.js](./network.js), there is the constructors (classes) for building neurons, layers, connections and networks.

In [main.js](./main.js), you can find a display example of the results of the network.

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
