//number of parameter must be match
function add(a,b){
    console.log(a);
    console.log(b);
}

add(10,20);
add(10.50,50.50);
add("Mia", "P");
//add(10); error
//add(); error
function addNumber(a:number, b:number){
    let sum = a+b;
    console.log("the sum of two numbers is " +sum);
}

addNumber(10,20);
addNumber(10.5,20.5);
//addNumber("Mia", "P"); error, wrong type

//function with no return type
function info() : void{
    console.log("Function with void return type");
    //return("hello"); error because void means no return allowed
}

//function with string return type
function sayHello(name:string) : string{
    return("Welcome " +name);
}

//function may or may not return
//no return type declared is 'any' by default
function hello(a:any) : any{
    //return 100;
    //return("Welcome");
}

//optional parameter (default value is 'undefined')
//? means optional
//optional parameter declaration goes from Right to Left
//can give 1 or more parameters as optional
//not gaps allowed- put all optional at the end
function empInfo(id?:number, name?:string, age?:number){
    //you can have all parameters be optional
    console.log("id is " +id);
    console.log("name is " +name);
    console.log("age is " +age);
}
empInfo(7,"Mia", 22);
empInfo(8, "Anna");
empInfo(9);
empInfo();

//default initialization
function studentInfo(sid:number=0, sname:string="Unknown", sage:number=1){
    console.log("Student id is " +sid);
    console.log("Student name is " +sname);
    console.log("Student age is " +sage);
}

studentInfo(1, "Mia", 22);
studentInfo(2, "Anna");
studentInfo(3);
studentInfo(); //all default values

//REST operator/parameter
//used to recieve 0, 1, or many parameters
//1 rest parameter per function
//must be the last parameter of the function
function employeeInfo(id:number, name:string, salary:number, ...skillset:string[]){
    //skillset is the REST parameter and it can take multiple values (array)
    console.log("id is " +id);
    console.log("name is " +name);
    console.log("salary is " +salary);
    console.log("number of skills is " +skillset.length);
    console.log("skillset is " +skillset);
}
employeeInfo(1, "Mia", 1000); //no skill set
employeeInfo(2, "Anna", 10000, "nurse"); //1 skill 'nurse'
employeeInfo(3, "Cathy", 100000, "mom", "wife"); //2 skills 'mom' 'wife'
employeeInfo(4, "Ralph", 1000000, "father", "husband", "golfer"); // 3 skills


