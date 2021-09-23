// const numArr = [12,3,16,4,2]

// const primeCheck = function(numArr) {
//     const primeNum = numArr.filter((item)=>{
//     if(item === 1){
//         return false
//     }else{
//         for(let i = 2; i<item ; i++){
//             if(item % i === 0){
//                 return false
//             }
//         }
//         return true
//     }
// })
// return primeNum
// }

// console.log(primeCheck(numArr))

// const originalArray = document.getElementById('orgDisplay')
// originalArray.innerText = '[' + numArr + ']'

// const displayArea = document.getElementById('display')
// displayArea.innerText = primeCheck(numArr)

// IIFE follows below

(function(numArr){
    const primeNum = numArr.filter((item)=>{
    if(item === 1){
        return false
    }else{
        for(let i = 2; i<item ; i++){
            if(item % i === 0){
                return false
            }
        }
        return true
    }
})
console.log(`${primeNum}`)
document.write(`${primeNum}`)
return primeNum
})([12,3,16,4,2])

const originalArray = document.getElementById('orgDisplay')
originalArray.innerText = '[12,3,16,4,2]'