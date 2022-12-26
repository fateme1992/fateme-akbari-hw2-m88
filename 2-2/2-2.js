let number1 = prompt("plrase add a number")
let number2 = prompt("plrase add a number")
number1 = parseInt(number1)
number2 = parseInt(number2)

function repeatElement(number1, number2) {
    //validation  
    if (typeof number1 !== 'number' || typeof number2 !== 'number') return 'invalid input';


    let array = [];
    for (let i = 0; i < number1; i++) {
        array[i] = number2
    }
    return (array)
}
console.log(repeatElement(3, 5))
