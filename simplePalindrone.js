
const palindrone = function(word) {
    const letters = [];
    let reverseWord = '';

    for (const letter of word) {
        letters.push(letter);
    }

    for (let char = letters.length - 1; char >= 0; char--) {
        reverseWord += letters[char];
    }

    if(word === reverseWord) {
        console.log(`${word} is a palidrone`);
    } else {
        console.log(`${word} is not a palidrone`);
    }
};

palindrone('racecar');
palindrone('freecodecamp');
