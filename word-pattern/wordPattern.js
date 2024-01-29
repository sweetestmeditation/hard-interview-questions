// wordPattern.js

function wordPattern(pattern, input) {
    const words = input.split(' ');
    
    if (pattern.length !== words.length) {
        return false;
    }
    
    const mapPatternToWord = new Map();
    const mapWordToPattern = new Map();
    
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];
        
        if (mapPatternToWord.has(char)) {
            if (mapPatternToWord.get(char) !== word) {
                return false;
            }
        } else {
            mapPatternToWord.set(char, word);
        }
        
        if (mapWordToPattern.has(word)) {
            if (mapWordToPattern.get(word) !== char) {
                return false;
            }
        } else {
            mapWordToPattern.set(word, char);
        }
    }
    
    return true;
}

module.exports = wordPattern;
