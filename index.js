//6
let obj = {
    red: "#FF0000",
    green: "#00FF00",
    white: "#FFFFFF",
}
console.log(Object.values(obj))

//7
console.log(Object.keys(obj))

//8
for (let key in obj) {
    console.log(Object.entries(`{ keys }: { values }`))
}



//........2................................
// function generator(array) {
//     let arrtype = 0
//     for (let i = 0; i <= array.length; i++) {
//         if (Array.isArray(array[i]) === true) {
//             arrtype += 1
//         }
//     } console.log(arrtype)
// }
// let array = [1, 'firstName', [2, 1], [6, 5]]
// generator(array)

//........3................................
// let word = "kGlhdTRl"
// function change(word) {
//     let newWord = ""
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === word[i].toUpperCase()) {
//             newWord += word[i].toLowerCase();
//         } else {
//             newWord += word[i].toUpperCase();
//         }
//     } return newWord;
// }
// console.log("word:", word)
// console.log("new word:", change(word))

//........4................................
let _str = "jfgksifni"
function threeLetter(_str) {
    let _strLength = _str.length
    console.log(_str)
    if (_strLength % 2 == 0) {
        console.log("string tool is even")
    } else {
        let newStr = []
        let centerLetter = parseInt(_strLength / 2)
        console.log(_str[centerLetter - 1], _str[centerLetter], _str[centerLetter + 1])
        newStr.push(_str[centerLetter - 1])
        newStr.push(_str[centerLetter])
        newStr.push(_str[centerLetter + 1])
        console.log(newStr.join(""));
    }
}

threeLetter(_str)

//........5................................









let numbers = [19, 5, 42, 2, 77]
function sort(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < (numbers.length - i - 1); j++) {
            if (numbers[j] > numbers[j + 1]) {
                let min = numbers[j]
                numbers[j] = numbers[j + 1]
                numbers[j + 1] = min
            }
        }
    }
    return numbers
}

sort(numbers)
console.log(numbers)

