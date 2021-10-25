import Utils from "./Utils.js";
const bitString = (arr, universum) => {
    let resultString = ""
    for (const element of universum) {
        if (Utils.includesElement(element, arr)) {
            resultString += '1'
        } else {
            resultString += '0'
        }
    }
    return resultString
}
export default bitString