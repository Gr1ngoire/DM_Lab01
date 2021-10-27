const validateInput = (input) => {
    // const splitInput = input.trim().split(', ').map((el) => {return Number(el)})
    // console.log(splitInput)
    // for (const el of splitInput) {
    //     if (typeof el !== 'number') {
    //         console.log(el)
    //     }
    // }
    // return splitInput.filter((el) => {return Number.isNaN(el)}).length === 0
    return input.trim().split(', ').map((el) => {return Number(el)}).filter((el) => {return Number.isNaN(el)}).length === 0
}

export default validateInput