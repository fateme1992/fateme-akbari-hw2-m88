let word = "jfg"
function threeMiddleLetter(word) {
    //validation
    if (typeof word !== "string") return "Invalid Input"

    let wordLength = word.length
    let newWord = []
    if (wordLength % 2 == 0) {
        return ("string length is even")
    } else {
        let centerLetter = parseInt(wordLength / 2)
        newWord.push(word[centerLetter - 1])
        newWord.push(word[centerLetter])
        newWord.push(word[centerLetter + 1])
    }
    return newWord.join("")
}
console.log("word:", word)
console.log("three middle of word is:", threeMiddleLetter(word));
