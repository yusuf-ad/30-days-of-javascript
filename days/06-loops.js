"use strict";

for (let i = 0; i <= 100; i++) console.log(i);

const names = ["yusuf", "mehmet", "gökhan", "ali", "oğuz"];

for (let i = 0; i < names.length; i++) {
  names[i] = names[i].replace(names[i][0], names[i][0].toUpperCase());
}

// * for döngüsü ile elemanları toplamak
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

// ! while loop

let i = 0;
while (i < names.length) {
  console.log(`isim ${i}:`, names[i]);
  i++;
}

i = 5;
do {
  console.log(`isim ${i}:`, names[i]);
  i++;
} while (i < names.length);

// ! for of loop

for (const name of names) {
  console.log("İsim:", name);
}

// ! adding all the numbers with for of loop

let sum1 = 0;

for (const num of numbers) {
  sum1 += num;
}
console.log(sum1);

// ! break is used to interrupt a loop

const name = [];

for (let i = 0; i < names.length; i++) {
  if (names[i][0] === "G") {
    name.push(names[i]);
    break;
  }
  console.log(names[i]);
}

// ! we use the keyword continue to skip a certain iterations
console.log("---CONTINUE---");

for (let i = 0; i < names.length; i++) {
  if (names[i][0] === "G") {
    name.push(names[i]);
    continue;
  }
  console.log(names[i]);
}
