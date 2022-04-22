// object type - type | interface
interface Animal {
  readonly id: number;
  name: string;
  age?: number;
}

const animal1: Animal = {
  id: 1,
  name: 'Butter',
};

const animal2: Animal = {
  id: 2,
  name: 'Mouse',
  age: 1.2,
};

// union type
interface Employee {
  id: number | string;
  name: string;
  gender: 'male' | 'female';
  grade: 'A' | 'B' | 'S';
}

// intersection type
interface BusinessPartner {
  name: string;
  credit: number;
}
interface Identity {
  id: number;
  name: string;
}
interface Contact {
  email: string;
  phone: number;
}

interface Employee extends BusinessPartner, Contact {}

// declaration merging
interface Equip {
    id: number;
    name: string;
}
interface Equip {
    yearUse: number;
    weight: number;
}
const equip: Equip = {
    id: 1,
    name: 'table',
    yearUse: 2,
    weight: 100
}
console.log(equip);

