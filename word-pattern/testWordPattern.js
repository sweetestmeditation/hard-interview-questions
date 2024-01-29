// testWordPattern.js

const wordPattern = require('./wordPattern');

// Test cases
const patterns = ['abba', 'abcabc', 'abba'];
const inputs = ['red blue blue red', 'red blue green red blue green', 'red blue green red'];

console.log('--- Testing wordPattern function ---');
for (let i = 0; i < patterns.length; i++) {
    console.log(`Example ${i + 1}:`);
    console.log('Pattern:', patterns[i]);
    console.log('Input:', inputs[i]);
    console.log('Result:', wordPattern(patterns[i], inputs[i]));
    console.log();
}
