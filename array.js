let arr = new Array(); //using the class method

let array = [] //an array of empty element

//create an array of strings called animals

var animals = ["Dog", "Goat", "Hen", "Cow", "Lion"]

//get values from the array
alert(animals[0])

console.log(animals)
// console.log(animals.length)

//update value in an array
animals[2] = "Horse"
console.log(animals)

//Different Methods in Array
//.push - To add a value to the end of the array
animals.push("Pig")
console.log(animals)

//.pop - To remove a value from the end of the array
animals.pop()
console.log(animals)

//.shift - it removes a value from the beginning of an array
animals.shift()
console.log(animals)

//.unshift - to add a value to the beginning of an array
animals.unshift("Cheetah")
console.log(animals)

//to get the index value of an array
console.log(animals.indexOf("Cow"))
