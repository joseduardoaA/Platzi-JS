
// 1. User  information 
const username = 'joseduardo'
const fullName = 'Jhon Dupe'
const edad = 25
const isStudent = true

// 2. Address
const address = {
    street: 'Cumville',
    city: 'Texas',
    state: 'California',
    zipCode: 456123
}

//3. Hobbies
const hobbies = ['Coding', 'Reading', 'Gaming']

// 4. Generating personalied bio

console.log(`I my name is ${fullName} 
my username is ${username} 
life in ${address.city}
my hobbies is ${hobbies.join (', ')}`)