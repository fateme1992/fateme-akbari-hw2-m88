let object = {
    red: "#FF0000",
    green: "#00FF00",
    white: "#FFFFFF",
}


function swapKeysAndValues(obj) {
    const swapped = Object.entries(obj).map(
        ([key, value]) => ({ [value]: key })
    );

    return Object.assign({ name: "fateme" }, ...swapped);
}

console.log(swapKeysAndValues(object));

// solution 2
function swapKeyValue(obj) {
    if (typeof obj === "object" || obj === null) return "invalid value"
    let newObj = {}
    for (let key in obj) {
        let value = obj[key]
        newObj[value] = key
    }
}