// Creating a program that accepts 2 number inputs from a user

let num1 = parseInt(prompt("Please Enter a number: "));
let num2 = parseInt(prompt("Please Enter another number: "));

var isSum = num1 + num2;

var output = "The Sum of " + num1 + " and " + num2 + " is " + isSum;

alert(output);


// Creating a program that assigns user names to individuals

let firstName = prompt("Please Enter Your First Name:  ");
let lastName = prompt("Please Enter Your Last Name: ");

var A = firstName.slice(0,4);
var B = lastName.slice(0,1);

var user = A + B;
var userId = user.toLowerCase();

var output = ("Your CapacityBay userid is "+ userId);

alert(output);