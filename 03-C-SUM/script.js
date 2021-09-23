const numArr = [11,25,33,21,10,9]

const findTotal = (numArr) => {
    let total = numArr.reduce((acc,curr)=>{
    return acc+=curr
},0)
    return total
}

console.log(findTotal(numArr))

const originalArray = document.getElementById('orgDisplay')
originalArray.innerText = '[' + numArr + ']'

const displayArea = document.getElementById('display')
displayArea.innerText = findTotal(numArr)