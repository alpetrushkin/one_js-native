const names = ['Donald', 'Alex', 'Bob', '100', 'Юрий', 'games', 'игорь'];
console.log(names.sort() === names)

const numbers = [-100, 1000, 9, 88]
console.log(numbers.sort())

// const compareFn = (a, b) => {
//     if (a < b) {
//         return -100
//     } else {
//         return 100
//     }
// }

const compareFn = (a, b) => a - b

console.log(numbers.sort(compareFn))

const students = [{name: "Bob", age: 22, isMarried: true, scores: 95},
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {name: "Helge", age: 21, isMarried: true, scores: 89},
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {name: "John", age: 19, isMarried: false, scores: 121},
    {name: "alex", age: 23, isMarried: true, scores: 89},];

const ageSort = students.sort((a, b) => a.scores - b.scores)
console.log(ageSort)

// const nameSort =students.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
const nameSort = students.sort((a, b) => a.name.localeCompare(b.name))
console.log(nameSort)

const nums = [12, 45, 23, 34, 9, 77, 1, 91,]

for (let j = 0; j < nums.length; j++) {
    let isSorted = true
    for (let i = 0; i < nums.length - 1 - j; i++) {
        if (nums[i] > nums[i + 1]) {
            isSorted = false;
            [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
        }
    }
    if (isSorted) break
}
console.log(nums) //сортировка пузырьком