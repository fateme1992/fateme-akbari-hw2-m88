let word = "kGlhdTRl"

function changeUpperOrLowerLetter(word) {
    //validation
    if (typeof word !== "string") return "Invalid Input"

    let newWord = ""
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            newWord += word[i].toLowerCase();
        } else {
            newWord += word[i].toUpperCase();
        }
    } return newWord;
}
console.log("word:", word)
console.log("new word:", changeUpperOrLowerLetter(word))