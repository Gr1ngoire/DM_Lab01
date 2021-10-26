const AND = (A, B, universum) => {
    let resultString = ""
    for (let i = 0; i < A.length; i++) {
        resultString += A[i] & B[i]
    }
    const resultArr = []
    for (let i = 0; i < resultString.length; i++) {
        if (resultString[i] === '1') {
            resultArr.push(universum[i])
        }
    }
    return `Бітова строка: ${resultString} Нормальний вид: ${resultArr}`
}
export default AND