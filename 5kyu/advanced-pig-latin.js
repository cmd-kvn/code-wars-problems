/*
Pig latin is created by taking all the consonants before the first vowel of a word and moving them to the back of the word followed by the letters "ay".

"hello" => "ellohay"
"creating" => "eatingcray"
If the first letter of the word is a vowel, the string is left the same and the letters "way" are appended to the end.

"algorithm" => "algorithmway"
This problem is different from other variations in that it expects casing to remain the same so:

"Hello World" => "Ellohay Orldway"
as well as punctuation.

"Pizza? Yes please!" => "Izzapay? Esyay easeplay!"
Your job is to take a string and translate it to Pig Latin. The string will never be undefined but may contain both numbers and letters. A word will never be a combination of numbers and letters. Also, there will never be punctuation at the beginning of a word and the only capital letter in a word will be the first letter meaning there are zero all capitalized words.
*/

const AY = 'ay';
const WAY = 'way';

module.exports = function advancedPigLatin(sentence) {
    //Convert the sentence to Pig Latin!
    // or should I say...
    //Onvertcay ethay entencesay otay Igpay Atinlay!
    return sentence.split(' ')
        .map(w => {
            // the word begins with a vowel
            if (w[0].match(/[aeiou]/gi)) {
                // the word has punctuation 
                if (hasPunctuation(w)) {
                    let punctIdx = firstPunctIndex(w);

                    // a word that begins with a vowel, ending with punctuation, in pig latin
                    return w.slice(0, punctIdx) + WAY + w.slice(punctIdx);
                }
                // a word that begins with a vowel in pig latin
                else return w + WAY;
            } 
            // the word begins with a consonant
            else 
            {
                // where the first vowel appears in the word
                let firstVowelIdx = w.search(/[aeiou]/gi);

                // the word has punctuation
                if (hasPunctuation(w)) {
                    // where the punctuation starts
                    let punctIdx = firstPunctIndex(w);

                    // the word in pig latin with punctuation 
                    return w.slice(firstVowelIdx, punctIdx) + w.slice(0, firstVowelIdx) + AY + w.slice(punctIdx);
                }
                // the word in pig latin
                else return w.slice(firstVowelIdx) + w.slice(0, firstVowelIdx) + AY;
            }
        })
        // preserve capitalization
        .map(x => x.match(/[A-Z]/g) ? x[0].toUpperCase() + x.slice(1).toLowerCase() : x)
        .join(' ');
};

function firstPunctIndex(word) {
    return word.search(/\W/gi);
}

function hasPunctuation(word) {
    return word.match(/[!?.]/g) ? true : false;
}