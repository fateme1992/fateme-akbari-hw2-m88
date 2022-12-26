let array = [1, 'firstName', [2, 1], [6, 5], 1, 31, "Amir", "test", false]

function generator(array) {
    let arrtype = 0
    let stringType = 0
    let boolianType = 0
    let numberType = 0
    for (let i = 0; i <= array.length; i++) {
        if (Array.isArray(array[i]) === true) {
            arrtype += 1
        } else if (typeof array[i] === "string") { stringType++ }
        else if (typeof array[i] === "number") { numberType++ }
        else if (typeof array[i] === "boolean") { boolianType++ }
    }
    console.log("string:", stringType, ",", "number:", numberType, ",", "boolian:", boolianType, ",", "array:", arrtype);
}
generator(array)



//Switch Case
function name(input) {
    switch (typeof input) {
        case 'number':
            numberType++
            break;
        case 'string':
            stringType++;
            break;
        default:
            "input isobject"
    }
}
