import Utils from "./Utils.js";

const OR = (A, B, universum) => {
    let {lessArray, greaterArray} = Utils.lessGreater(A, B)
    if (A.length !== B.length) {
        for (let i = 0; i < greaterArray.length - lessArray.length; i++) {
            lessArray += '0'
        }
    }
    let resultString = ""
    for (let i = 0; i < greaterArray.length; i++) {
        resultString += lessArray[i] | greaterArray[i]
    }
    const resultArr = []
    for (let i = 0; i < resultString.length; i++) {
        if (resultString[i] === '1') {
            resultArr.push(universum[i])
        }
    }
    return `Бітова строка: ${resultString} Нормальний вид: ${resultArr}`
}
export default OR