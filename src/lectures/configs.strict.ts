// nolmplicitAny
function isEmpty(numberList: number[]) {
  return numberList.length === 0;
}
console.log(isEmpty([1, 2, 3]));

// strictNullChecks
interface Student {
  id: number;
  name: string;
  gender: 'male' | 'female';
  age: number;
}

function findStudentById(studentList: Student[], studentId: number) {
  if (studentList.length === 0) return undefined;
  return studentList.find((x) => x.id === studentId);
}

const studentList: Student[] = [
  { id: 1, name: 'Alice', gender: 'female', age: 20 },
  { id: 2, name: 'Bob', gender: 'male', age: 20 },
];

const bob = findStudentById(studentList, 2);
console.log(bob);

// alwaysStrict
// ...
