import Utils from "./Utils.js";
const bitDifference = (A, B, U) => {
    // Intersection A with NOT B
    let bitA = ""
    let bitB = ""
    for (let i = 0; i < U.length; i++) {
        if (Utils.includesElement(U[i], A)) {
            bitA += "1"
        } else {
            bitA += "0"
        }
        if (Utils.includesElement(U[i], B)) {
            bitB += "1"
        } else {
            bitB += "0"
        }
    }
    let notB = ""
    for (const el of bitB) {
        if (el === "0") {
            notB += "1"
        } else {
            notB += "0"
        }
    }
    let resultString = ""
    const result = []
    for (let i = 0; i < U.length; i++) {
        if (bitA[i] === "1" && bitA[i] === notB[i]) {
            resultString += "1"
            result.push(U[i])
        } else {
            resultString += "0"
        }
    }
    return `Бітовий вигляд:${resultString}; Нормальний вигляд: ${result}`
}
export default bitDifference