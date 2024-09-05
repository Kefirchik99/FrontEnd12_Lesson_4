// const sample = [1, 2, 3, 4, 5];

// for (let i = 0; i < 10; i++){
//     console.log(i);
// }
// console.log('ECHO PHP');

// const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// for (let i = 0; i < names.length; i++){
//     console.log(`Hello ${names[i]}`);
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let num in numbers) {
//     console.log(num);
// }

// const myCar = {
//     make: 'BMW',
//     model: '5',
//     color: 'red',
// }
// let newObj = Object.entries(myCar).map(thing => {
//     return [thing.color];
// });
// for (let car in myCar) {
//     console.log(car);
// }


class Employee {

    #name;
    #surname;
    #salary;
    static raiseAmount = 1.04;

    constructor(name, surname, salary) {
        this.#name = name;
        this.#surname = surname;
        this.#salary = salary;
        
    }

    get email() {
        return  `${this.#name.toLowerCase()}@company.com`
    }

    get fullName() {
        return `${this.#name} ${this.#surname}`
    }

    set fullName (newName) {
        const [name, surname] = newName.split(' ');
        this.#name = name;
        this.#surname = surname;

    }

    get salary(){
        return this.#salary;
    }

    set salary(newSalary){
        this.#salary = newSalary;
    }

    raiseSalary() {
        this.#salary *= this.raiseAmount || Employee.raiseAmount;
    }
    static changeRaiseAmount (newRaiseAmount) {
        Employee.raiseAmount = newRaiseAmount;
    }
}

class Developer extends Employee {
    constructor(name, surname, salary, progLang) {
        super(name, surname, salary);
        this.progLang = progLang;
    }
    writeCode() {
        console.log(`${this.fullName} writes ${this.progLang} code.`);
    }
}

class Manager extends Employee {

    constructor(name, surname, salary, employees) {
        super(name, surname, salary);
        this.employees = employees || [];
    }
}

const emp1 = new Employee('Ivan', 'Ber', 2500);
const emp2 = new Employee('Helga', 'Markovitsch', 40)
const dev1 = new Developer('Jack', 'Russel', 4500, 'Python');
const man1 = new Manager('Sarah', 'Connor', 5000, 'JavaScript', [emp1, emp2]);
console.log(man1.employees);
console.log(dev1.name);
dev1.writeCode();
// console.log(emp1.name);
// emp2.raiseSalary();
// console.log(emp2.salary);
// console.log(emp1.fullName);
// emp1.salary = 40000;
// console.log(emp1.salary);
// emp1.fullName = 'J. J.';
// console.log(emp1.fullName);
// Employee.raiseAmount = 1.23;
// Employee.changeRaiseAmount(1.50);
// emp1.raiseSalary();
// emp2.raiseSalary();
// console.log(Employee.raiseAmount);
// console.log(emp1.salary);
// console.log(emp2.salary);