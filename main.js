

const subtract = (firstNumber, secondNumber) => {
    const sub = firstNumber - secondNumber
    return sub
}

// const resultSub = subtract(9, 4)
// console.log(resultSub)


const divide = (firstNumber, secondNumber) => {
    const divi = firstNumber / secondNumber
    return divi
}

// const resultDiv = divide(60, 2.5)
// console.log(resultDiv)


const multiply = (firstNumber, secondNumber) => {
    const mult = firstNumber * secondNumber
    return mult
}

// const resultMult = multiply(9, 4)
// console.log(resultMult)


const square = (firstNumber) => {
    const sq = firstNumber * firstNumber
    return sq
}

// const resultSquare = square(9)
// console.log(resultSquare)





const twoLegs = multiply(2, 0.75)
const fourLegs = multiply(4, 0.25)
const totalLegsOverall = 60
const totalLegs = twoLegs + fourLegs
const animals = divide(totalLegsOverall, totalLegs)
console.log(`The total number of animals is ${animals}`)
