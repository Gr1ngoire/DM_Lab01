import Utils from "./Utils.js";
const equal = (A, B) => {
    if (A.length !== B.length) {
        return "Множини НЕ РІВНІ"
    } else {
        for (let i = 0; i < A.length; i++) {
            if (!Utils.includesElement(A[i], B)) {
                return "Множини НЕ РІВНІ"
            }
        }
    }
    return "Множини РІВНІ"
}
export default equal