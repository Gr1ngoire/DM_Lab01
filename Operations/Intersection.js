import Utils from "./Utils.js"

const intersection = (A, B) => {
    const {lessArray} = Utils.lessGreater(A, B)
    // const resultArr = []
    // for (const element of lessArray) {
    //     if (Utils.includesElement(element, A) && Utils.includesElement(element, B)) {
    //         resultArr.push(element)
    //     }
    // }
    // return resultArr
    return lessArray.filter((el) => {return Utils.includesElement(el, A) && Utils.includesElement(el, B)})
}
export default intersection