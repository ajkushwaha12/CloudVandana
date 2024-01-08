function reverseWords(sentence) {
    let reversedSentence = "";
    let word = "";
    let isWord = false;

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === " " || i === sentence.length - 1) {
            if (i === sentence.length - 1) {
                word += sentence[i];
            }
            if (isWord) {
                for (let j = word.length - 1; j >= 0; j--) {
                    reversedSentence += word[j];
                }
                isWord = false;
            }
            if (i !== sentence.length - 1) {
                reversedSentence += " ";
            }
            word = "";
        } else {
            word += sentence[i];
            isWord = true;
        }
    }

    return reversedSentence;
}

const inputSentence = "This is a sunny day";
const reversed = reverseWords(inputSentence);
console.log(reversed); // Output: "sihT si a ynnus yad"
