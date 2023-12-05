// ! it takes a callback function. The promise callback function
// ! has two parameters which are the resolve and reject functions.

// Creating Promise

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("İşlem başarılı!");
//   }, 1500);

//   // reject("işlem başarısız");
//   // resolve("işlem başarılı");
// });

// Promise.prototype.then() and Promise.prototype.catch()
//  methods return promises, they can be chained

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// const API_URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(API_URL)
//   .then((res) => res.json())
//   .then((data) => console.log(data[10]))
//   .catch((err) => console.log(err));

// ! The word async in front of a function means that function will return a promise.

const catsAPI = "https://api.thecatapi.com/v1/breeds";

const catNames = [];

fetch(catsAPI)
  .then((res) => res.json())
  .then((data) =>
    data.map((cat) => {
      catNames.push({ name: cat.name });
    })
  )
  .then(() => console.log(catNames))
  .catch((err) => console.error(err));
