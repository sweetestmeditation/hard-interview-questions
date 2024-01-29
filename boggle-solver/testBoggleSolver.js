// testBoggleSolver.js

const boggleSolver = require('./boggleSolver');

// Define your test grids
const grid1 = [
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'I']
];

const grid2 = [
    ['R', 'A', 'T', 'E'],
    ['A', 'S', 'P', 'K'],
    ['L', 'M', 'N', 'O'],
    ['P', 'Q', 'R', 'S']
];

// Test the boggleSolver function
const result1 = boggleSolver(grid1);
console.log('Result 1:', result1);

const result2 = boggleSolver(grid2);
console.log('Result 2:', result2);


