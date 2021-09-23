const numArr = [12,3,16,4,2]

const primeCheck = (numArr) => {
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
return primeNum
}

console.log(primeCheck(numArr))

const originalArray = document.getElementById('orgDisplay')
originalArray.innerText = '[' + numArr + ']'

const displayArea = document.getElementById('display')
displayArea.innerText = primeCheck(numArr)