const person = Object.create(
  {
    calculateAge() {
      console.log('Age:', new Date().getFullYear() - this.birthYear)
    }
  },
  {
    name: {
      value: 'Ilya',
      enumerable: true,
      writable: true,
      configurable: true
    },
    birthYear: {
      value: 1992,
      enumerable: false,
      writable: false,
      configurable: false
    },
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear
      },
      set(value) {
        console.log('Set age', value)
      }
    }
  }
)

person.name = 'Danya'

for(let key in person) {
  if(person.hasOwnProperty(key)) {
    console.log('Key', key, person[key]);
  }
}

delete person.birthYear;
console.log(person)

console.log(person.age)
person.age = 100;
console.log(person.age)

person.calculateAge()