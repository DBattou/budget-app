// const person = {
//   name: "Baptiste",
//   age: 27,
//   location: {
//     city: "Philadelphia",
//     temperature: "40°C"
//   }
// };

// const { name, age } = person;

// console.log(name, age);

const adress = ["coucou", "798", "chemoin des grousx", "villennes", "France"];

const [name, number, , city, state, bigCountry = "Europe"] = adress;

console.log(name, number, city, bigCountry);
