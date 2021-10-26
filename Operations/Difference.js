import Utils from "./Utils.js";

const difference = (A, B) => {
    // const resultArr = []
    // for (const el of A) {
    //     if (!Utils.includesElement(el, B)) {
    //         resultArr.push(el)
    //     }
    // }
    // return resultArr
    return A.filter((el) => {return !Utils.includesElement(el, B)})
}
export default difference