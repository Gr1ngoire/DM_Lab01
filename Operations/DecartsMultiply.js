const decartsMultiply = (A, B) => {
    const resultArr = []
    for (const elementA of A) {
        for (const elementB of B) {
            resultArr.push(`(${[elementA, elementB]})`)
        }
    }
    return resultArr
}
export default decartsMultiply