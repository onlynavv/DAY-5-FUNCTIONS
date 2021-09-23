const numArray = [12,3,6,17,26,8]

const findOddNum = function(num) {
    const oddArr = num.filter((item)=>{
        return item % 2 != 0
    })
    return oddArr
}


console.log(findOddNum(numArray))

const displayArea = document.getElementById('display')
displayArea.innerText = findOddNum(numArray)

// using IIFE

// (function(num){
//     const oddArr = num.filter((item)=>{
//         return item % 2 != 0
//     })
//     console.log(`the odd array: ${oddArr}`)
//     return `the odd array: ${oddArr}`
// })([12,3,6,17,26,8]);


