"use strict";

// ! how to create an array
const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(6, 7, 8, 9, 10);
const arr3 = Array(11, 12, 13, 14, 15);
const arr4 = new Array(4);
console.log(arr1, arr2, arr3, arr4);
// !  using of join and split method
const name = "yusuf ad çok iyi birisi";
const splitName = name.split(" ");
const joinName = splitName.join(" ");
console.log("splitName:", splitName, "joinName:", joinName);
console.log(splitName[splitName.length - 1]);
// !--ARRAY METHODS--!
// ? Creating static values with fill
arr4.fill("static value");
console.log(arr4);
// ? concat:To concatenate two arrays.
console.log(arr1.concat(arr2, arr3, [16, 17], 18, 19, 20));
// ? indexOf:To check if an item exist in an array.
// ? If it exists it returns the index else it returns -1.
console.log(arr1.indexOf(1));
console.log(arr1.indexOf("1"));
// ? lastIndexOf: It gives the position of the last item in the array.
// ? If it exist, it returns the index else it returns -1.
// * includes:To check if an item exist in an array.
// * If it exist it returns the true else it returns false.
// ! join: It is used to join the elements of the array, the argument we passed
// ! in the join method will be joined in the array and return as a string.
console.log(arr1.join(" - "));
// ? Slice: To cut out a multiple items in range.
// ? It takes two parameters:starting and ending position.
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice()); // -> it copies all  item
console.log(numbers.slice(0)); // -> it copies all  item
console.log(numbers.slice(0, numbers.length)); // it copies all  item
console.log(numbers.slice(1, 4)); // -> [2,3,4] // it doesn't include the ending position
// ? Splice: It takes three parameters:Starting position,
// ? number of times to be removed and number of items to be added.
const numbers1 = [1, 2, 3, 4, 5];
numbers1.splice();
console.log(numbers1); // -> remove all items
const numbers2 = [1, 2, 3, 4, 5];
numbers2.splice(0, 1);
console.log(numbers2); // remove the first item
const numbers3 = [1, 2, 3, 4, 5, 6];
numbers3.splice(3, 3, 7, 8, 9);
console.log(numbers3.splice(3, 3, 7, 8, 9)); // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items
// ? Push: adding item in the end.
// ? To add item to the end of an existing array we use the push method.
// * shift: Removing one array element in the beginning of the array.
// * unshift: Adding array element in the beginning of the array.
// ? reverse: reverse the order of an array.
