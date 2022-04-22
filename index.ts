console.log('hello world');

// Explicit types
const count: number = 123;
const studentName: string = 'John';
const isActive: boolean = true;
const numberList: number[] = [1, 2, 3];

// Infered types
const numberPhone = 123;
const listPhone = [1, 2, 4, 3];

// Eraised types
const greeting: string = 'hello';
console.log(greeting);

(() => {
  interface Student {
    id: number;
    name: string;
    age: number;
  }
  const student: Student = {
      id: 1,
      name: 'Alice',
      age: 15
  }

  const {id, name, age} = student
  console.log(id, name, age);
  
})();

// downleveling
