// Given an object/dictionary with keys and values that consist of both strings and integers, design an algorithm to calculate and return the sum of all of the numeric values.
// For example, given the following object/dictionary as input:
// {
//   "cat": "bob",
//   "dog": 23,
//   19: 18,
//   90: "fish"
// }
// Your algorithm should return 41, the sum of the values 23 and 18.

const obj = {
    "cat": "bob",
    "dog": 23,
    19: 18,
    90: "fish"
}

const array = Object.values(obj)

let sum = 0;

array.map(i => {
    if (Number.isInteger(i)) {
        return sum += i
    } else {
        return null
    }
})

console.log(sum)

