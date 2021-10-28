const sayHello = function(){
  console.log("Hello, world!");
}
sayHello();

const sayHelloToConsole = function(name){
  console.log("Hello," + name);
}
sayHelloToConsole("Olga");

/* A return statement will not output anything
to the console. However, when a function returns 
a value, we can still console.log it later: */

const returnSayHello = function(name){
 return "Hello," + name;
}
const greeting = returnSayHello("Olga");
console.log(greeting);

