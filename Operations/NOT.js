import Utils from "./Utils.js";
const NOT = (A, B, universum) => {
    let {lessArray, greaterArray} = Utils.lessGreater(A, B)
    if (A.length !== B.length) {
        for (let i = 0; i < greaterArray.length - lessArray.length; i++) {
            lessArray += '0'
        }
    }
    let resultStringA = ""
    let resultStringB = ""
    for (let i = 0; i < greaterArray.length; i++) {
        resultStringA += Number(!Number(lessArray[i]))
        resultStringB += Number(!Number(greaterArray[i]))
    }
    const resultArrA = []
    const resultArrB = []
    for (let i = 0; i < resultStringA.length; i++) {
        if (resultStringA[i] === '1') {
            resultArrA.push(universum[i])
        }
        if (resultStringB[i] === '1') {
            resultArrB.push(universum[i])
        }
    }
    return `Бітові строки: A: ${resultStringA}, B: ${resultStringB} Нормальний вид: A: ${resultArrA}; B: ${resultArrB}`
}
export default NOT