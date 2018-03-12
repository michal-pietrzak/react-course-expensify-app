// 
// Object destructuring
// 


// const person = {
//   name: 'Michal',
//   age: 45,
//   location: {
//     city: 'Lodz',
//     temp: 43
//   }
// };

// const { name = 'Anonymous', age } = person;
// const { city, temp: temperature } = person.location

// console.log(`${name} is ${age}`);

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }


// const book = {
//   title: 'Things',
//   author: 'A. W. Riter',
//   publisher: {
//     name: 'Penguinn'
//   }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);


// 
// Array destructuring
// 

// const address = ['1299 St. Juniper Str.', 'Philadelphia', 'Pennsylvania', '19493'];
// const [ , city, state = 'New York' ] = address;

// console.log(`You are in ${city}, ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.55', '$2.75'];

const [ product = 'No choice', , price = 'nothing'] = item;

console.log(`A medium ${product} costs ${price}`);