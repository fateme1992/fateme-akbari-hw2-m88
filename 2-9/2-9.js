let object = {
    red: "#FF0000",
    green: "#00FF00",
    white: "#FFFFFF",
}

function showObjectProperty(object) {
    return Object.keys(object)
}
console.log(showObjectProperty(object));