import difference from "./Difference.js";
const symmetricDifference = (A, B) => {
    // За означенням, A+B("+" - символ симетричної різниці) = (A\B)U(B\A) =>
    // => можемо шукати симетричну різниця за допомогою різниці
    return difference(A, B).concat(difference(B, A))
}
export default symmetricDifference