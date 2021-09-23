const numArray = [12,3,6,17,26,8]

const findOddNum = (num) => {
    const oddArr = num.filter((item)=>{
        return item % 2 != 0
    })
    return oddArr
}


const displayArea = document.getElementById('display')
displayArea.innerText = findOddNum(numArray)
