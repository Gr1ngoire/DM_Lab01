import Utils from "./Utils.js";
const equality = (A, B) => {
    if (A.length !== B.length) {
        return "Множини НЕ РІВНІ"
    } else {
        for (const element of A) {
            if (!Utils.includesElement(element, B)) {
                return "Множини НЕ РІВНІ"
            }
        }
    }
    return "Множини РІВНІ"
}
export default equality