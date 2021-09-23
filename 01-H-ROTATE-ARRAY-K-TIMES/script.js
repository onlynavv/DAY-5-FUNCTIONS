const arr = [1,2,3,4,5]
// console.log(arr.pop())
// let poppedEl = arr.pop()
// console.log(poppedEl)
// console.log(arr)
// arr.unshift(poppedEl)
// console.log(arr)

const rotatedArr = function(arr,k){
    for(let i=0; i<k; i++){
        arr.unshift(arr.pop())
    }
    return arr
}

// console.log(rotatedArr(arr,3))

const originalArray = document.getElementById('orgDisplay')
originalArray.innerText = '[' + arr + ']'

const displayArea = document.getElementById('display')
displayArea.innerText = rotatedArr(arr,3)