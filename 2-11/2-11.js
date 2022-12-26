let object = {
    red: "#FF0000",
    green: "#00FF00",
    white: "#FFFFFF",
}

function lengthOfObject(object) {
    let array = Object.entries(object)
    return array.length;
}
console.log("the length of object is", lengthOfObject(object));