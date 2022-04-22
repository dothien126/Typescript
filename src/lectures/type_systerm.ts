// literal types
let countCre: 1;           // 1
let nameCountry: 'VietNam';// VietNam
let isPassActive: false;   // false
let teacher = null;        // any

const countDes = 2;        // 2
const nameEquip = 'rules'  // rules
const isRoleActive = true  // true

let countEqual = 3;        // number
let nameHold = 'Coc';      // string

const cat = {
    id: 1,
    mew: 'mew'
}
cat.mew = 'mow'

const dog = {
    id: 1,
    gow: 'gow'
} as const

const animalList = ['cat', 'dog', 'pig', 'bird'] as const

// type assertion
let s = 'correct'
function getResult(state: 'correct') {
    console.log(state);
}
getResult(s as 'correct')
