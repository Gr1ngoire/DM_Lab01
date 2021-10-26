const NOT = (A, B, universum) => {
    let resultStringA = ""
    let resultStringB = ""
    for (let i = 0; i < A.length; i++) {
        resultStringA += Number(!Number(A[i]))
        resultStringB += Number(!Number(B[i]))
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