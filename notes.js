// Variables
function test() {
    var a = "3";
    var b = "8";
    
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:
var c = a;
a = b;
b = c;
/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}


// Twitter prompt
 
var tweet = prompt("Compose your message:");
var tweetCount = tweet.length()
alert("You have written" + tweetCount + " characters, you have" + 140-tweetcount + "remaining")

// Slicing Activity

var name = prompt("What is your name?");
var firstChar = name.slice(0, 1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = name.slice(1,name.length);
var capitalisedName = upperCaseFirstChar + restOfName;
alert("Hello" + capitalisedName);

// Dog Age Calculator


var dogAge = prompt("How old is your dog?");
humanAge = (dogAge - 2) * 4 + 21;
alert("Your dog is " + humanAge + " years old in human years.")

// Functions
function getMilk(bottles) {
alert("leaveHouse");
alert("moveRight");
alert("moveRight");
alert("moveUp");
alert("moveUp");
alert("moveUp");
alert("moveUp");
alert("moveRight");
alert("moveRight");
alert("buy" + bottles + "bottles of milk");
}

getMilk(3)

// BMI calculator challenge


function bmiCalculator(weight, height) {
    var bmi = weight /(height * height)
    return bmi;
}

// If Statements
// The Love Calculator


prompt("What is your name?")
prompt("what is their name?")

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
if (loveScore ===100){
alert("Your love score is " + loveScore + "%" + "You love eachother like Flight loves Curry.")
}
if (loveScore > 30 && loveScore <=100){
    alert("Your love score is " + loveScore + "%" + "")
    }

    if (loveScore <=30){
        alert("Your love score is " + loveScore + "%" + "You go together like toothpaste and orange juice")
        }
alert("Your love score is " + loveScore + "%");

// FizzBuzz Game

var output = [];
var count = 1;

function fizzBuzz() {

if (count % 3 === 0 && count % 5 === 0) {
    output.push("fizzBuzz")
}

else if (count % 3 === 0) {
    output.push("Fizz")
}
else if (count % 5 === 0) {
   output.push("Buzz")
}
else{
output.push(count);
}
    count++;
    console.log(output);
}

// Fibonacci Code

function fibonacciGenorator() {

    var output[];
    if (n === 1) {
      output [0];
    }
    else if (n == 2) {
      output = [0, 1];
    }
    else {
      output = [0, 1];
      for(var i = 2; i < n; i++) {
        output.push(output[output.length - 2] + output[output.length - 1]);
      }
      
     
    }
    
    return output;
    
    }
    
    output = fibonacciGenerator(2);
    console.log(ouput)