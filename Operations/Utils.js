const includesElement = (element, array) => {
    for (const el of array) {
        if (el === element) {
            return true
        }
    }
    return false
}

const lessGreater = (arr1, arr2) => {
    const lessArray = arr1.length < arr2.length ? arr1 : arr2
    const greaterArray = arr2.length > arr1.length ? arr2 : arr1
    return {
        lessArray,
        greaterArray
    }
}

const Utils = {
    includesElement,
    lessGreater
}
export default Utils