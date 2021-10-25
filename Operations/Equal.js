const equal = (A, B) => {
    if (A.length !== B.length) {
        return "Множини НЕ РІВНІ"
    } else {
        for (let i = 0; i < A.length; i++) {
            if (A[i] !== B[i]) {
                return "Множини НЕ РІВНІ"
            }
        }
    }
    return "Множини РІВНІ"
}
export default equal