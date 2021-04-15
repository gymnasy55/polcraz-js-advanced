const people = [
  { name: 'Илья', age: 17, budget: 40000 },
  { name: 'Елена', age: 25, budget: 3400 },
  { name: 'Игорь', age: 49, budget: 50000 },
  { name: 'Михаил', age: 15, budget: 1800 },
  { name: 'Василиса', age: 24, budget: 25000 },
  { name: 'Виктория', age: 38, budget: 2300 },
]

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }

// for (let person of people) {
//   console.log(person)
// }

// forEach
people.forEach(person => console.log(person))

// map
const newPeople = people.map(person => person.age * 3)
console.log(newPeople)

// filter
// const adults = []
// for(let i = 0; i < people.length; i++) {
//   if(people[i].age >= 18) {
//     adults.push(people[i])
//   }
// }
const adults = people.filter(person => person.age >= 18)
console.log(adults)

// reduce
// let amount = 0
// for (let i = 0; i < people.length; i++) {
//   amount += people[i].budget
// }

const amount = people.reduce((total, person) => total + person.budget, 0)
console.log(amount)

// find
const igor = people.find(person => person.name === 'Игорь')
console.log(igor)

// findIndex
const igorIndex = people.findIndex(person => person.name === 'Игорь')
console.log(igorIndex)

// === === === ===
const overallBudget = people
  .filter(person => person.budget > 3000)
  .map(person => {
    return {
      info: `${person.name} (${person.age})`,
      budget: Math.sqrt(person.budget)
    }
  })
  .reduce((total, person) => total+person.budget, 0)
console.log(overallBudget)