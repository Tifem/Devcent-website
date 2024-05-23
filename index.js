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