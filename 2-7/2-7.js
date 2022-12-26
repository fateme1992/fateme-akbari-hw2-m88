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


console.log("Array number is", numbers)
console.log("Sort array number is:", sort(numbers));