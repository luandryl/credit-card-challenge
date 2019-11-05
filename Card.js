const isString = (str) => {
    return (typeof str === "string") ? str : -1
}

const removeStringSpaces = (str) => {
    if (isString(str) !== -1) {
        return (str.split(" ").length > 1) ? str.split(" ").join(""): str
    } else {
        throw new Error("The argument of this function must be String")
    }
}

const reverseStr = (str) => {
    if (isString(str) !== -1) {
        let strSplit = str.split("")
        let reverseArray = strSplit.reverse()
        return reverseArray.join("")
    } else {
        throw new Error("The argument of this function must be String")
    }
    
}

const validCardNumber = (number) => {
    let sum = 0;
    for (let index = 0; index < number.length; index++) {
        let intVal = parseInt(number.substr(index, 1))
        if (index % 2 !== 0) {
            intVal *= 2
            if (intVal > 9) {
                intVal -= 9
            }
        }
        sum += intVal 
    }
    return (sum % 10 === 0)
}

const validate = (number) => {
    let invertedNumber = removeStringSpaces(reverseStr(number.toString()))
    return validCardNumber(invertedNumber)
}

const Card = {
    validate,
    isString,
    removeStringSpaces,
    reverseStr
}

export default Card