//Syntax is one that defines the rules and regulations that hlps to write any
//statemnt  in a programming language. Semantics is one that refers to the meaning
//of the associated line of code in a programming language
//Javascript Syntax
//it is the set of rules that define a correctly structured javascript program.
//Js is case sensitive and the instructions usually ends in semicolon (;)
//we have single and multiple line of comment in js

var uid = "abc123"
var firstName = "Boluwatife"
var lastName = "Janet"
var email = "boluwatifejanet7@gmail.com"
var country = "Nigeria"
var state = "Ogun state"
var courseCount = 0
var isLoggedInFromGoogle = false
var isLoggedInFromFacebook = true
var password = 1234567

console.log(`
    With unique id: ${uid} 
    User firstName is:${firstName}
    User lastName is: ${lastName}
    she is from: ${country}
    and her state is: ${state}
    she logged in to google :${isLoggedInFromGoogle}
    also logged in to fb: ${isLoggedInFromFacebook}
    and her email is : ${email}
    and uses the password: ${password}
`)


var sellingPrice = 199;
var listingPrice = 799;

var discountPrice = ((listingPrice - sellingPrice) / listingPrice) * 100

console.log("The discount price is " + discountPrice)

displayDiscountPercentage = Math.round(discountPrice)
console.log("The discount price percentage is " + displayDiscountPercentage)

//calculate simple interest
var principal = 1000;
var rate = 5;
var time = 3;

var result = rate > time;
console.log(typeof result);

var simpleInterest = (principal * rate * time) / 100
console.log("The simple Interest is " + simpleInterest )
//object
const person = {
    firstname:"Sunday",
    lastname:"Elijah",
    age: 20,
    eyeColor: "black"
}
console.log(person.firstname)

function addNumber(){
    a = 5
    b= 7
    d = a+b
    console.log(d)
}

addNumber()

function mul(a,b){
    a = 30;
    b = 20;
    c = a * b
    console.log(c)
}
mul(a,b)

function myFunction(p1, p2){
    return p1 * p2;
}

var result = myFunction(5,9);
console.log(result)

function calculateArea(length, width){
    return length + width;
}

var area = calculateArea(10,45);
console.log(area)


function isEven(number){
    return number %2 === 0;
}

var check = isEven(4);
console.log(check);


function isOdd(number){
    return number %2 === 1;
}
var check1 = isOdd(7);
console.log(check1)

function person1(){
   const object = {
    name: "Alice",
    age: 70,
    color: "black",
    weight: 72,
}
console.log(object.name)
}

person1()

function createPerson(name,email,age){
    this.name= name;
    this.email = email;
    this.age = age;

    this.greet = function(){
        return "Hello, my name is " + this.name + "!"
    };
}

var createPerson1 = new createPerson("Janet", "janet@gmail.com", 28)
// console.log(createPerson1)
console.log(createPerson1.greet())
console.log("My name is ", createPerson1.name)
console.log("and my email is ", createPerson1.email)
console.log("i am ", createPerson1.age, "years old")

//conditional statement
var day = "Monday"

if(day == "Monday"){
    // alert("Today is monday")
} else if(day == "Tuesday"){
// alert("Today ")
}

var months = "May"

switch(months){

    case "January":
        console.log("This month is january")
        break;

    case "February":
        console.log("It's february month")
        break;

    default:
        console.log("None is part of month of the year")
        break;

}

//prompt
// var grade = prompt("What is your grade?")
// if(grade >= 70){
//     console.log("your grade is A")
// }else{
//     console.log("Try again later")
// }

function performMathsOperation(number1, number2, operationType){
    if(operationType == "add"){
        const result = number1 + number2
        return result
    }else if(operationType == "sub"){
        const result = number1 - number2
        return result
    }else{
        alert("Operation is not supported")
    }
}

const sumResult = performMathsOperation(45, 20, "mul")
console.log(sumResult)

//function expression
// const sayHello = function(){
//     alert("Good Morning")
// }

// sayHello()

const sayName = function(firstName){
    alert(`Your name is: ${firstName}`)
}

sayName("Boluwatife")
//function declaration

// function sayHelloWorld(){
//     alert("Welcome to class")
// }

// sayHelloWorld()

//Arrow Function

// let sum = (a,b)=> a+b;

// let greetings = () => alert("You are welcome");
// greetings()

// iterate over the array with map

// let usernames = ["john", "azeez", "lekan", "tife", "akintunde"]
// let usernameInUppercase = usernames.map((username) =>{
//     // console.log(username)
// const transformedUsername = username.toUpperCase()
// return transformedUsername
// })

// console.log(usernameInUppercase)

//iterate over the array with filter

// let populations = [200, 100, 30, 4,5,60]

// console.log(`Default population: ${populations}`)

// let populationGreaterThan30 = populations.filter((population) =>{
//     if(population > 30){
//         return population
//     }
// })

// console.log(populationGreaterThan30)

//Map
//Map is a collection of keyed data items, just like an object. But the difference between object and map is that map allows keys of any types