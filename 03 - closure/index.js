function createCalcFunction(n) {
  return function () {
    console.log(1000 * n)
  }
}

const calc = createCalcFunction(42)
calc()

function createIncrementer(n) {
  return function (num) {
    return num + n
  }
}

const addOne = createIncrementer(1)
const addTen = createIncrementer(10)

console.log(addOne(25))
console.log(addTen(25))

function urlGenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`
  }
}

const comUrl = urlGenerator('com')
const ruUrl = urlGenerator('ru')

console.log(comUrl('google'))
console.log(comUrl('netflix'))

console.log(ruUrl('yandex'))
console.log(ruUrl('vkontakte'))

/*
Написать свою функцию bind
Пример работы:

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Михаил', age: 22, job: 'Frontend'}
const person2 = {name: 'Елена', age: 19, job: 'SMM'}

bind(person1, logPerson)
bind(person2, logPerson)
*/

function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args)
  }
}

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Михаил', age: 22, job: 'Frontend'}
const person2 = {name: 'Елена', age: 19, job: 'SMM'}

bind(person1, logPerson)()
bind(person2, logPerson)()