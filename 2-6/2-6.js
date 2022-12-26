let sentence = "never give up";

function captalizeWord(sentence) {
    //validation
    if (typeof sentence !== "string") return "Invalid Input"

    let word = sentence.split(" ");
    for (let i = 0; i < word.length; i++) {
        word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1)

    }
    let newSentence = word.join(" ")
    return newSentence;
}
console.log("normal sentence:", sentence);
console.log("captalaize sentence:", captalizeWord(sentence));


//Map Mehod
let capitalizeArr = word.map(function (newWord) {
    return newWord.at(0).toUpperCase().concat(newWord.slice(1))
})
capitalizeArr.join(" ")//=>>>>>>> dar in marhale agar fasele ziadi bein kalame bashe eroor mide
// example: "  never   give   up"

let capitalizeArr2 = word.map(function (newWord) {
    if (newWord) {//===> agar kalame trusy bood
        return newWord.at(0).toUpperCase().concat(newWord.slice(1))
    }
    else return newWord
})

