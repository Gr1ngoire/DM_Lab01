const selector = document.querySelector('#selectOperation')
const getResult = document.querySelector('#getResult')
const result = document.querySelector('#resultField')

import unite from "./Operations/Union.js"
import intersection from './Operations/Intersection.js'
import difference from "./Operations/Difference.js";
import complement from "./Operations/Complement.js";
import symmetricDifference from "./Operations/SymmetricDifference.js";
import decartsMultiplication from "./Operations/DecartsMultiplication.js";
import isSubset from "./Operations/isSubset.js";
import equality from "./Operations/Equality.js";
import bitString from "./Operations/BitString.js";
import OR from "./Operations/OR.js";
import AND from "./Operations/AND.js";
import NOT from "./Operations/NOT.js";
import XOR from "./Operations/XOR.js";
import validateInput from "./InputValidation.js";
import bitDifference from "./Operations/bitDifference.js";

const U = [1, 2, 3, 4, 5, 6, 7, 8]
// A = [1, 7, 2, 6, 8]
// B = [4, 8, 6, 7, 3, 5]

let operation = 'Об’єднання'
selector.addEventListener('change', (event) => {
    operation = event.target.value
})

getResult.addEventListener('click', () => {
    const inputA = document.querySelector('#A_array').value
    const inputB = document.querySelector('#B_array').value
    if (!validateInput(inputA) || !validateInput(inputB)) {
        result.textContent = "Неправильна форма вводу множин"
        return
    }
    const A = inputA.split(', ').length === 1 && inputA.split(', ')[0] === "" ? [] : inputA.split(', ').map((element) => Number(element))
    const B = inputB.split(', ').length === 1 && inputB.split(', ')[0] === "" ? [] : inputB.split(', ').map((element) => Number(element))
    switch (operation) {
        case "Об’єднання":
            result.textContent = `Об’єднання: ${String(unite(A, B))}`
            break
        case "Перетин":
            result.textContent = `Перетин: ${String(intersection(A, B))}`
            break
        case "Різниця":
            result.textContent = `Різниця: A на B: ${String(difference(A, B))}; B на А: ${String(difference(B, A))}`
            break
        case "Бітова різниця":
            result.textContent = `Бітова різниця: A на B: ${String(bitDifference(A, B, U))}; B на А: ${String(bitDifference(B, A, U))}`
            break
        case "Доповнення":
            result.textContent = `Доповнення: A': ${String(complement(A, U))}; B': ${String(complement(B, U))}`
            break
        case "Симетрична різниця":
            result.textContent = `Симетрична різниця: ${String(symmetricDifference(A, B))}`
            break
        case "Декартів добуток":
            result.textContent = `Декартів добуток: ${String(decartsMultiplication(A, B))}`
            break
        case "Є підмножиною":
            result.textContent = `Є підмножиною: ${String(isSubset(A, B))}`
            break
        case "Рівність множин":
            result.textContent = `Рівність множин: ${String(equality(A, B))}`
            break
        case "Бітові строки":
            result.textContent = `Бітові строки: A: ${String(bitString(A, U))} B: ${String(bitString(B, U))}`
            break
        case "NOT(заперечення)":
            result.textContent = `NOT(заперечення): ${String(NOT(bitString(A, U), bitString(B, U), U))}`
            break
        case "OR(диз’юнкція)":
            result.textContent = `OR(диз’юнкція): ${String(OR(bitString(A, U), bitString(B, U), U))}`
            break
        case "AND(кон’юнкція)":
            result.textContent = `AND(кон’юнкція): ${String(AND(bitString(A, U), bitString(B, U), U))}`
            break
        case "XOR(нерівнозначність)":
            result.textContent = `XOR(нерівнозначність): ${String(XOR(bitString(A, U), bitString(B, U), U))}`
            break
    }
})