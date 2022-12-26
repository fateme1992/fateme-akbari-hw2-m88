
let arr = [true, false, 1, 0, 5, undefined, null, "fateme", NaN]

function deleteSomeElement(arr) {

    //* solution 1*//

    // let result = arr.filter((item) => {
    //     if (item === null) return false;
    //     if (item === 0) return false;
    //     if (item === undefined) return false;
    //     if (item === false) return false;
    //     return true;
    // });

    // * solution 2*//
    // let newArr = []
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === null) continue;
    //     if (arr[i] === undefined) continue;
    //     if (arr[i] === 0) continue;
    //     if (arr[i] === false) continue;
    //     newArr.push(arr[i]);
    // }
    // return newArr;

    //*solution3*//
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(arr);
console.log(deleteSomeElement(arr))

//FALSY
// falsy
// 0,0.0,0*0,00
// -0,-0*0,-0.0
// BigInt
// "",''
// null
// undefined
// NaN
// document.all

