"use strict";

// 1.Get user input using prompt(“Enter your age:”). If user is 18 or older , give
//  feedback:'You are old enough to drive' but if not 18
// give another feedback stating to wait for the number of years he needs to turn 18.

let userAge = prompt("Enter your age:");

if (userAge >= 18) {
  console.log("You are old enough to drive 😉");
} else {
  console.log(
    `You need ${18 - userAge} ${
      18 - userAge > 1 ? "years" : "year"
    } to turn 18. 😂`
  );
}

const date1 = new Date();

const myAge = date1.getFullYear() - 2003;
const yourAge = prompt("Enter your age", 20);

console.log(
  `You are ${
    Math.max(myAge, yourAge) - Math.min(myAge, yourAge)
  } year older than me.`
);
