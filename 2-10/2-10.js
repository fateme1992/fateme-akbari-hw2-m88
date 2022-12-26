let object = {
    red: "#FF0000",
    green: "#00FF00",
    white: "#FFFFFF",
}

function showObjectEntries(object) {
    return Object.entries(object)
}
console.log(showObjectEntries(object));