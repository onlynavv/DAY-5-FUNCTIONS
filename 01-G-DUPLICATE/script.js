const arr = [2,'naveen',3,'lion',3,10,'lion']

// console.log([...new Set(arr)])

const uniArr = function (arr) {
    return [...new Set(arr)]
}

console.log(uniArr(arr))

const originalArray = document.getElementById('orgDisplay')
originalArray.innerText = '[' + arr + ']'

const displayArea = document.getElementById('display')
displayArea.innerText = uniArr(arr)