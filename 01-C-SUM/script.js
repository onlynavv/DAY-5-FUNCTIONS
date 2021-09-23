// const numArr = [11,25,33,21,10,9]

// const findTotal = function(numArr) {
//     let total = numArr.reduce((acc,curr)=>{
//     return acc+=curr
// },0)
//     return total
// }

// console.log(findTotal(numArr))

// const originalArray = document.getElementById('orgDisplay')
// originalArray.innerText = '[' + numArr + ']'

// const displayArea = document.getElementById('display')
// displayArea.innerText = findTotal(numArr)

//IIFE follows below

(function(numArr){
    let total = numArr.reduce((acc,curr)=>{
    return acc+=curr
},0)
    console.log(`the total is ${total}`)
    document.write(`the total is ${total}`)
    return total
})([11,25,33,21,10,9])
