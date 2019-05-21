const isPangram = function isPangram(text) {

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const splitText = text.split('');

    for (let i = 0; i < alphabet.length; i += 1) {
        if (!(splitText.includes(alphabet[i]))) {
            return false;
        }
    }
    return true;
};

console.log(isPangram('the quick brown fox jumps over the lazy dog'));

module.exports = isPangram;