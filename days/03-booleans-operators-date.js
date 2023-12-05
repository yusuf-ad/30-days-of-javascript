"use strict";

// ! BOOLEANS
// * A boolean data type represents one of the two values:true or false.
// * Boolean value is either true or false.
// ! Truthy values
// ? All numbers(positive and negative) are truthy except zero
// ? All strings are truthy except an empty string ('')
// ? The boolean true
// ! Falsy values
// ? 0
// ? 0n
// ? null
// ? undefined
// ? NaN
// ? the boolean false
// ? '', "", ``, empty string
// TODO It is good to remember those truthy values and falsy values.

// ! OPERATORS
// * 1.Assignment Operators
// * 2.Arithmetic Operators
// * 3.Comparison Operators
// * 4.Logical Operators
// * 5.Increment Operator
// ? Pre-increment
let count = 0;
console.log(++count);
// ? Post-Increment
let count1 = 0;
console.log(count1++);
console.log(count1);
// * 6.Decrement Operator
// * 7.Ternary Operators
// ! Ternary operator allows to write a condition. Another way to write conditionals is using ternary operators
let isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");
isRaining = false;
// * 5>4 ? "EVET 5 BÜYÜKTÜR DÖRTTEN" : "SENİN MATEMATİĞİNİ SEVERİM"
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");

// ! Window Methods
// * 1.Alert Method alert('Welcome to 30DaysOfJavaScript')
// * 2.Prompt Method prompt()
// ? let number = prompt("Enter number", "number goes here");
// ? console.log(number);
// * 3.Confirm Method confirm()
// TODO let isDelete = confirm("Silmek istediğine emin misin ?");

// console.log(isDelete ? "Silme işlemi başarılı" : "Silme işlemi iptal edildi");

// ! DATE OBJECTS

const date = new Date();
let year = date.getFullYear(),
  month = date.getMonth(),
  day = date.getDate(),
  hour = date.getHours(),
  minute = date.getMinutes(),
  second = date.getSeconds(),
  dayName = date.getDay();

let months = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

let days = [
  "pazartesi",
  "salı",
  "çarşamba",
  "perşembe",
  "cuma",
  "cumartesi",
  "pazar",
];

days.forEach(function (day, index, array) {
  days[index] = day.replace(day[0], day[0].toUpperCase());
});

let humanReadableDate = `${date.getDate()} ${months.at(
  date.getMonth()
)} ${date.getFullYear()} ${days.at(
  -2
)} , ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `;

console.log(humanReadableDate);
// 7 Ocak 2023, Cumartesi , 19:29:31

let currentYear = date.getFullYear();
let myAge = currentYear - 2003;
let yourAge = currentYear - 1974;
console.log(
  `I am ${Math.max(myAge, yourAge) - Math.min(myAge, yourAge)} older than you `
);

let curYear = date.getFullYear();
let curMonth = date.getMonth() + 1;
let curDate = date.getDate();
let curHour = date.getHours();
let curMin = date.getMinutes();

let humanReadableTime = `${curDate < 10 ? "0" + curDate : curDate}.${
  curMonth < 10 ? "0" + curMonth : curMonth
}.${curYear} ${curHour < 10 ? "0" + curHour : curHour}:${
  curMin < 10 ? "0" + curMin : curMin
}`;
console.log(humanReadableTime);
