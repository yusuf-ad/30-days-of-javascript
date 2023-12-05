"use strict";
// ! Primitive data types are compared by its values.
// ! Primitive data types are immutable(non-modifiable) data types.
let numOne = 3;
let numTwo = "3";
console.log("1: ", numOne == numTwo);
console.log("2: ", numOne === numTwo);
let js = "JavaScript";
let py = "Python";
console.log("3: ", js == py);
let lightOn = true;
let lightOff = false;
console.log("4: ", lightOn == lightOff);
// ! Non-primitive data types are modifiable or mutable.
// ! Non-primitive data types cannot be compared by value.
// * Even if two non-primitive data types have the same properties and values, they are not strictly equal.
let nums1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("5: ", nums1 == nums2);
// ! MATH OBJECT
const PI = Math.PI;
console.log(Math.round(PI)); // 3 to round values to the nearest number

console.log(Math.floor(PI)); // 3 rounding down

console.log(Math.ceil(PI)); // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, returns the maximum value

console.log(Math.floor(Math.random() * 11)); // creates random number between 0 and 10
// ! STRINGS
// * Strings are texts, which are under single , double, back-tick quote.
// ! String Concatenation(Birleştirme)
let firstName = "Yusuf",
  space = " ",
  lastName = "Ad";
let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log("İsmim", fullName);
// ! Escape Sequences in Strings
// ? In JavaScript and other programming languages \ followed by some characters is an escape sequence.
// * \n: new line
// * \t: Tab, means 8 spaces
// * \\: Back slash
// * \': Single quote (')
// * \": Double quote (")
console.log(
  "I hope everyone is enjoying the \t '30 Days Of JavaScript challenge.'\nDo you ?"
); // line break
// ! TEMPLATE LITERALS (TEMPLATE STRINGS)
// ? We can inject data as expressions inside a template string.
// ? To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign
fullName = `İsmim ${firstName} ${lastName}`;
console.log(fullName);
// ! String Methods
// TODO split(): The split method splits a string at a specified place.
let string = "30 Days Of JavaScript ";

console.log(string.split()); // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(" ")); // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

let firstName1 = "Asabeneh";

console.log(firstName1.split()); // Change to an array - > ["Asabeneh"]
console.log(firstName1.split("")); // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = "Finland, Sweden, Norway, Denmark, and Iceland";

console.log(countries.split(",")); // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(", ")); //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
// TODO trim(): Removes trailing space in the beginning or the end of a string.
console.log("  \t \t    Javascript \t \t      ".trim());
// TODO replace(): takes as a parameter the old substring and a new substring.
let string1 = "30 Days Of JavaScript";
console.log(string1.replace("JavaScript", "React")); // 30 Days Of React
// * indexOf(): Takes a substring and if the substring exists in a string it returns
// * the first position of the substring if does not exist it returns -1
// ? startsWith: it takes a substring as an argument and it checks if the string starts
// ? with that specified substring. It returns a boolean(true or false).
// TODO repeat(): it takes a number as argument and it returns the repeated version of the string.
let strRepeat = string.repeat(10); // lovelovelovelovelovelovelovelovelovelove
console.log(strRepeat.match(/script/gi));
// ! Changing Data Type (Casting)
// * Casting: Converting one data type to another data type.
// * We use parseInt(), parseFloat(), Number(), + sign, str()
// ! String to Integer(Int)
let num = "10";
let numInt = parseInt(num);
console.log(numInt); // 10 parseInt()
let num1 = "10";
let numInt1 = Number(num1);
console.log(numInt1); // 10 Number()
let num2 = "10";
let numInt2 = +num2;
console.log(numInt2); // 10 Plus sign(+)
