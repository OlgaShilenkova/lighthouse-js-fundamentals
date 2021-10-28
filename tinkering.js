
/* for loop
const amounts = [61.00, 52.25, 112.99, 5.00];
const total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ', total);
*/

/* for-of loop
const total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);
*/



// Callback func
// that is passed into another function
// function expression catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
console.log (helloCat(catSays));

// Another example of callback func
const dogSay = function(max){
 let message = "";
 for (let i= 0; i < max; i++){
   message = message + "wow ";
 }
 return message;
};

function helloDog(callbackFunction){
  return "Hello " + callbackFunction(5);
}
console.log(helloDog(dogSay));

/*
Write an anonymous function expression
that stores a function in a variable
called "laugh" and outputs the number
of "ha"s that you pass in as an argument.
var laugh = function(num){
  let message = "";
  for(let i=0; i< num; i++){
      message += "ha";
  }
  return message + "!";
};
console.log(laugh(3));
*/

//// Inline function expression///////

/* pass a function inline as an
argument to another function. 

// Function declaration that takes
//  in two arguments: a function 
// for displaying
// a message, along with a name 
// of a movie

function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in 
the function and name of movie

movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");

*/


function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}
emotions ("happy",function laugh(num){
  let message = "";
  for (let i = 0; i < num; i++){
    message += "ha";
  }
  return message + "!";
}
);