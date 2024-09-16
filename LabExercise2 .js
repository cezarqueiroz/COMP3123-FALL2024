//QUESTION1
const greetter = (myArray) => {
    const greetText = 'Hello ';
    for (const fullName of myArray) {
        console.log(`${greetText}${fullName}`);
    }
};

greetter(['Randy Savage', 'Ric Flair', 'Hulk Hogan']);



//QUESTION2
const capitalize = (nameStr) => {
    const [firstLetter, ...restWord] = nameStr;
    return `${firstLetter.toUpperCase()}${restWord.join('')}`;
};

console.log(capitalize('fooBar')); 
console.log(capitalize('nodeJs')); 


//QUESTION3
const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(capitalize);
console.log(capitalizedColors);


//QUESTION4
var values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = (NumArray) => NumArray.filter(value => value >= 20);

console.log(filterLessThan20(values));



//QUESTION5
var numArray = [1, 2, 3, 4];
function calculateSum(numArray) {
    return numArray.reduce((totalValue, currentNumber) => {
        return totalValue + currentNumber;}, 0);
}

function calculateProduct(numArray) {
    return numArray.reduce((totalValue, currentNumber) => {
        return totalValue * currentNumber;}, 1);
}

console.log(calculateSum(numArray));      
console.log(calculateProduct(numArray));


//QUESTION6
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model} Engine: ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    info() {
        return `${this.model} has a balance of ${this.balance}`;
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info()); 