const numArr = [121,30,161,44,21, 'madam']

const palinArr = function(item) {
    console.log(item)
    let currItem = String(item)
    console.log(currItem.length)
    let i = 0
    let j = currItem.length - 1

    while(i < j){
        if(currItem[i] === currItem[j]){
            i++
            j--
        }else{
            return false
        }
    }
    return true
}

const findPalin = (numArr) =>{
    return numArr.filter((item)=>{
       return palinArr(item)
    })
}

console.log(findPalin(numArr))

const originalArray = document.getElementById('orgDisplay')
originalArray.innerText = '[' + numArr + ']'

const displayArea = document.getElementById('display')
displayArea.innerText = findPalin(numArr)