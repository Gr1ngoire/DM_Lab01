const selector = document.querySelector('#selectOperation')
const getResult = document.querySelector('#getResult')
const result = document.querySelector('#resultField')

import unite from "./Operations/Union.js"
import intersection from './Operations/Intersection.js'
import difference from "./Operations/Difference.js";
import addition from "./Operations/Addition.js";
import symmetricDifference from "./Operations/SymmetricDifference.js";
import decartsMultiply from "./Operations/DecartsMultiply.js";
import isSubset from "./Operations/isSubset.js";
import equal from "./Operations/Equal.js";
import bitString from "./Operations/BitString.js";
import OR from "./Operations/OR.js";
import AND from "./Operations/AND.js";
import NOT from "./Operations/NOT.js";
import XOR from "./Operations/XOR.js";


const U = [1, 2, 3, 4, 5, 6, 7, 8]
// A = [1, 7, 2, 6, 8]
// B = [4, 8, 6, 7, 3, 5]

let operation = 'Об’єднання'
selector.addEventListener('change', (event) => {
    operation = event.target.value
})

getResult.addEventListener('click', () => {
    const A = document.querySelector('#A_array').value.split(', ').map((element) => Number(element))
    const B = document.querySelector('#B_array').value.split(', ').map((element) => Number(element))
    switch (operation) {
        case "Об’єднання":
            result.textContent = `Об’єднання: ${String(unite(A, B))}`
            break
        case "Перетин":
            result.textContent = `Перетин: ${String(intersection(A, B))}`
            break
        case "Різниця":
            result.textContent = `Різниця: ${String(difference(A, B))}`
            break
        case "Доповнення":
            result.textContent = `Доповнення: A': ${String(addition(A, U))}; B': ${String(addition(B, U))}`
            break
        case "Симетрична різниця":
            result.textContent = `Симетрична різниця: ${String(symmetricDifference(A, B))}`
            break
        case "Декартів добуток":
            result.textContent = `Декартів добуток: ${String(decartsMultiply(A, B))}`
            break
        case "Є підмножиною":
            result.textContent = `Є підмножиною: ${String(isSubset(A, B))}`
            break
        case "Рівність множин":
            result.textContent = `Рівність множин: ${String(equal(A, B))}`
            break
        case "Бітові рядки":
            result.textContent = `Бітові рядки: A: ${String(bitString(A, U))} B: ${String(bitString(B, U))}`
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
            result.textContent = `Бітові рядки: A: ${String(XOR(bitString(A, U), bitString(B, U), U))}`
            break
    }
})