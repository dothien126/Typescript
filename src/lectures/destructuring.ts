interface People {
  id: number;
  name: string;
  age: number;
  gender: string;
}

const John: Student = {
  id: 1,
  name: 'John',
  age: 12,
  gender: 'male',
};

// const { id, age, gender } = John;
const { id, ...rest } = John;

const Jame = {
  ...John,
  name: 'Jame',
};

// array destructuring
const fullName = 'Do Van Thien';
const wordList = fullName.split(' ');

const [firstName, andName, lastName] = wordList;

// array with ...rest
const [x, y, ...remaining] = [1, 2, 3, 4];
console.log(...remaining);

// array with ...spread
const numList = [1, 2, 3, 4, 5, 6];
const newList1 = [...numList, 9, 8, 7];
console.log(newList1);

// clone array of objects
interface Person {
  id: number;
  gender: string;
  weight: number;
  height: number;
}

const personList: Person[] = [
  { id: 1, gender: 'male', weight: 15, height: 15 },
  { id: 2, gender: 'female', weight: 12, height: 12 },
];

const newList = [...personList];
newList[0].weight = 12;
console.log(personList[0].weight);

// swap 2 items
let abc = 5;
let def = 10;
[def, abc] = [abc, def];

// destructuring parameters
// ver 1
function createStudent(student: { id: number; username: string; age: number }) {
  const { id, username, age } = student;
}

createStudent({
  id: 1,
  username: 'Thien',
  age: 12,
});

// ver 2
function callAnimal({ id, name, age }: { id: number; name: string; age: number }) {
  console.log(id, name, age);
}

callAnimal({
  id: 1,
  name: 'cat',
  age: 1.3,
});

// ver 3
interface Department {
  id: number;
  name: string;
  floor: number;
}

function callDepartment({ id, name, floor }: Department) {
  console.log(id, name, floor);
}

callDepartment({
  id: 3,
  name: 'tower',
  floor: 3,
} as Department);
