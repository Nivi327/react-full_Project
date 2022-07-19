// Primitives: number, string, boolean
// More Complex types: arrays, objects
// Function types, Parameters

// Primitives

let age: number;
age = 12;

let userName: string;
userName = "Nivi";

let isInstructor: boolean;
isInstructor = true;

// More complext Types

// Array type
let hobbies: string[];
hobbies = ["Sports", "Coding"];

// Object type
let person: {
  name: string;
  age: number;
};

person = {
  name: "Nivi",
  age: 12,
};

let people: {
  name: string;
  age: number;
}[];

// Type inference feature

let course = "React - The Complete Guide";
// course = 1234;

// Union Types

let newThing: number | string = "This is awsome";
newThing = 12;

// setting the type aliases
type Person = {
  name: string;
  age: number;
};

let details: Person = {
  name: "Nivi",
  age: 18,
};

let group: Person[] = [
  {
    name: "Nivi",
    age: 18,
  },
  {
    name: "Usha",
    age: 45,
  },
];

// Functions and Types

function sum(a: number, b: number): number {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generic Types

function insertAtBeggining(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

const numArray = insertAtBeggining([1, 2, 3], 0);

numArray[0].split(""); // This is wrong number type doesnot have split method

// To over come the above runtime error, we use generics

function insertAtEnd<T>(array: T[], value: T) {
  const newArray = [...array, value];
  return newArray;
}

const valArray = insertAtEnd([1, 2, 3], 4); // Type number[]
// valArray[0].split(""); //Corrects the error

const strArray = insertAtEnd(["a", "b", "c"], "d"); // Type string[]
strArray[0].split("");
