import Utils from "./Utils.js"

const unite = (A, B) => {
    const {lessArray, greaterArray} = Utils.lessGreater(A, B)
    // const resultArr = []
    // for (const element of lessArray) {
    //     if (!Utils.includesElement(element, greaterArray)) {
    //         resultArr.push(element);
    //     }
    // }
    // return resultArr.concat(greaterArray)
    return lessArray.filter((el) => {return !Utils.includesElement(el, greaterArray)}).concat(greaterArray)
}

export default unite