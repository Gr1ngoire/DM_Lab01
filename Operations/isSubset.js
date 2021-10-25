import Utils from "./Utils.js";

const isSubset = (A, B) => {
    for (const element of A) {
        if (!Utils.includesElement(element, B)) {
            return 'Множина A НЕ Є підиножиною множини B'
        }
    }
    return 'Множина A Є підиножиною підмножини B'
}
export default isSubset