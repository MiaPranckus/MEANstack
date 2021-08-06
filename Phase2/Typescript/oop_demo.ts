//object creation using ES6 in typecript
/* class Employee{
    id=100;
    name="Mia";
    age=22;

    dis(): void{
        console.log("Id number is " +this.id);
        console.log("Name is " +this.name);
        console.log("Age is " +this.age);
    }
}

let emp1 = new Employee();
emp1.dis();
let emp2 = new Employee();
emp2.dis(); */

//See how they both display the same information? because it's
//defined as that in the class

//Parameterized constructor
/* class Employee {
    private id:number;
    private name:string;
    private age:number;

    constructor(id:number, name:string, age:number){
        this.id = id; //'this.id' is instance but 'id' itself is local
        this.name = name;
        this.age = age;
    }

    dis(): void{
        console.log("Id number is " +this.id);
        console.log("Name is " +this.name);
        console.log("Age is " +this.age);
    }

}

let emp1 = new Employee(100, "mia", 22);
let emp2 = new Employee(101, "Anna", 25);
emp1.dis();
emp2.dis(); */

//emp1.id=100; //can't change because it is set to private
//console.log(emp1.id) //can't access because it is private

//constructor shortcut initialization
class Employee{
    //we can use access specifiers(public/private) with parameter
    //variable to make the variable as an instance variable
    //typescript DOES NOT support multiple constructors.
    //to make multiple constructors work, we have to use 'optional'
    //or default initialization parameter concept
    constructor(private id:number, public name:string, private age?:number){}
        dis(): void{
            console.log("Id number is " +this.id);
            console.log("Name is " +this.name);
            console.log("Age is " +this.age);
        }
    }

let emp1 = new Employee(20, "Mia", 22);
let emp2 = new Employee(21, "Anna", 25);
let emp3 = new Employee(22, "Casey");

emp1.dis();
emp2.dis();
console.log(emp1.name);
//console.log(emp1.id); private