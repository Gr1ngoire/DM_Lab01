import Utils from "./Utils.js";

const addition = (A, U) => {
    // const resultArr = []
    // for (const element of U) {
    //     if (!Utils.includesElement(element, A)) {
    //         resultArr.push(element)
    //     }
    // }
    // return resultArr
    return U.filter((el) => {return !Utils.includesElement(el, A)})
}
export default addition