let sentence = 'this sentence is going to get convert to title cased'

const sentArr = sentence.toLowerCase().split(' ')
console.log(sentArr)

var jointWords = []

const titleCapFunc = function() {
    for(let i = 0; i<sentArr.length ; i++){
    var firstLetter = sentArr[i][0].toUpperCase()
    var remLetters = sentArr[i].slice(1)
    console.log(remLetters)
    jointWords[i] = firstLetter+remLetters
}
console.log(jointWords)
console.log(jointWords.join(' '))
const displaySent = jointWords.join(' ')
return displaySent
}

console.log(titleCapFunc(sentence))

const previousSentence = document.getElementById('orgDisplay')
previousSentence.innerText = sentence

const displayArea = document.getElementById('display')
displayArea.innerText = titleCapFunc(sentence)