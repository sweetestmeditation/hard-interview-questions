// boggleSolver.js

const fs = require('fs');

// Load the dictionary from the dictionary file
function loadDictionary() {
    return fs.readFileSync('dictionary.txt', 'utf8').split('\n').map(word => word.trim());
}

// Check if a word is valid using the dictionary
function isValidWord(word, dictionary) {
    return dictionary.includes(word);
}

// Depth-first search to explore all possible words starting from a cell
function dfs(grid, visited, row, col, currentWord, validWords, dictionary) {
    // Base case: if currentWord is a valid word, add it to validWords
    if (isValidWord(currentWord, dictionary)) {
        validWords.add(currentWord);
    }

    // Mark the current cell as visited
    visited[row][col] = true;

    // Define the directions for exploring adjacent cells
    const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

    // Explore all adjacent cells
    for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;

        // Check if the new cell is within the grid and not visited
        if (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length && !visited[newRow][newCol]) {
            // Recursively explore the new cell
            dfs(grid, visited, newRow, newCol, currentWord + grid[newRow][newCol], validWords, dictionary);
        }
    }

    // Mark the current cell as unvisited to backtrack
    visited[row][col] = false;
}

// Explore the grid and find all valid words
function exploreGrid(grid, dictionary) {
    const validWords = new Set(); // Use a set to store unique valid words
    const visited = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(false));

    // Iterate through each cell and run DFS
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            dfs(grid, visited, row, col, grid[row][col], validWords, dictionary);
        }
    }

    return Array.from(validWords); // Convert set to array for easier handling
}

// Main function to solve Boggle
function boggleSolver(grid) {
    // Load the dictionary
    const dictionary = loadDictionary();

    // Explore the grid and find all valid words
    const validWords = exploreGrid(grid, dictionary);

    return validWords;
}

module.exports = boggleSolver;
