// // !------ 1) Constructor Functions ------!
// // ! arrow function doesnt have "this" keyword

// const Person = function (firstName, lastName, birthYear) {
//   // ! instance properties
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthYear = birthYear;
//   // ! you should never create method in constructor functions
// };
// const timur = new Person("timur", "türkkan", 1974);
// console.log(timur, timur instanceof Person);

// // ! static method
// Person.hey = () => {
//   console.log("Hey", this);
// };

// // !-- Prototypes --!
// console.log(Person.prototype);

// Person.prototype.calcAge = this.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// timur.calcAge();
// console.log(timur.__proto__ === Person.prototype);

// Person.prototype.country = navigator.language;

// // !------ 2) ES6 Classes ------!

// class PersonCl {
//   constructor(firstName, lastName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     this.lastName = lastName;
//   }

//   // * Instance methods
//   // ! Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   // ! the getter allows us to access value from the object
//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // ! the setter allows us to modify the value of certain properties.
//   // ! any setter method needs to have exactly one parameter
//   set setSkill(skill) {
//     this.skill = skill;
//   }

//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   }

//   getPersonelInfo() {
//     let fullName = this.getFullName();
//     return `Merhaba ben ${fullName}`;
//   }
// }

// const john = new PersonCl("john", "adams", 1729);
// console.log(john.age);

// john.setSkill = "Javascript";
// console.log(john);

// // ! INHERITANCE

// class Teacher extends PersonCl {
//   teach() {
//     return "matematik dersi öğretiliyor";
//   }
// }

// class Student extends PersonCl {
//   learn() {
//     return "ders dinleniyor";
//   }
// }

// const teacher1 = new Teacher("Tayfun", "Erbilen", 1996);
// const student1 = new Teacher("Zerafet", "Erbilen", 1996);

// ! A class is like an object constructor, or a blueprint for creating objects
class Person {
  constructor(firstName, lastName, birthYear, country = "Türkiye") {
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = 2023 - birthYear;
    this.country = country;
    this._skills = ["javascript"];
    this.score = 24;
  }

  // * class methods
  getFullName() {
    const fullName = `${this.firstName} ${this.lastName}`;

    return fullName;
  }

  appendSkills() {
    return this._skills;
  }

  // * get method allow us to access value from the object
  get getSkills() {
    return this._skills;
  }

  // * set method allow us to modift the value of certain properties
  set setSkills(skill) {
    this._skills.push(skill);
  }

  set increaseScore(score) {
    this.score += score;
  }

  // you cant call static methods on class instant
  static getTimeStamp() {
    return new Date();
  }
}

// CLASS INSTANTIATION
const person1 = new Person("yusuf", "ad", 2003);
const person2 = new Person("ali", "haydar", 2012, "Scotland");
const person3 = new Person("john", "quincy", 1789, "USA");

console.log(person1);
console.log(person1.getFullName());
console.log(person2);
console.log(person3);

person1.score = 31;
console.log(person1.score);

person1.setSkills = "react";
console.log(person1.getSkills);
console.log(person1.appendSkills());

console.log(person1);
console.log(Person.getTimeStamp());

class Teacher extends Person {
  constructor(firstName, lastName, birthYear, country = "türkiye", gender) {
    super(firstName, lastName, birthYear, country);

    this.gender = gender;
  }

  // öğretir
  teach() {
    return `${this.firstName} kodlama öğretiyor`;
  }

  getFullName() {
    return super.getFullName() + " " + `(${this.gender})`;
  }
}

const teacher1 = new Teacher("tayfun", "erbil", 1992, _, "erkek");

console.log(teacher1.teach());
console.log(teacher1.gender);
console.log(teacher1.getFullName());

class Student extends Person {
  // öğrenir
  learn() {
    return `${this.firstName} kodlama öğreniyor`;
  }
}

const student1 = new Student("Zarafet", "erbilen", 1994);

console.log(student1.learn());
console.log(student1.getFullName());
