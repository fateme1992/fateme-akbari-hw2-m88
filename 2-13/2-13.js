let library = [
    {
        title: "The Road Ahead",
        auyhor: "Bill Gates",
        libraryID: "1254 ",
    },
    {
        title: "Water Isaacson",
        auyhor: "Steven Jobs",
        libraryID: "4264 ",
    },
    {
        title: "Mockingjay:The Final Book of The Hunger Games",
        auyhor: "Suzanne Collins",
        libraryID: "3245 ",
    },
];


function sortByLibraryID(library) {
    return library.sort(function (id1, id2) {
        if (id1.libraryID > id2.libraryID)
            return 1  //(id2,id1)
        else if (id1.libraryID < id2.libraryID) {
            return -1 //(id1,id2)
        }
        else {
            return 0 // keep original
        }
    })
}
console.log(sortByLibraryID(library))



// function sortByLibraryID(library) {

//     for (var i = 0; i < library.length; i++) {
//         for (let j = 0; j < library.length - i - 1; j++) {
//             if (library[i].libraryID > library[i + 1].libraryID) {
//                 let temp = library[i]
//                 library[i] = library[i + 1]
//                 library[i + 1] = temp
//             }
//         }
//     } return library
// }
// console.log(sortByLibraryID(library))


//sort
[1, 4, 6, 2].sort(function (a, b) {
    //return >0: a after b ==> (b,a)
    //return <0: a before b ==> (a,b)
    //return ==0 : keep original order
})