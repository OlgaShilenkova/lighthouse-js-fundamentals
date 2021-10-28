const isEven  = function (num) {
  return num % 2 === 0;
}
const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);


console.log(isEven(10));
console.log(isEven(11));

/*
This will produce the same result 
as our previous example. 
There are a couple things to understand here.
 First, console.log is itself a function–only 
 it's pre-defined by JavaScript and we can use 
 it without having to declare it ourselves.
  Second, we can pass the result returned by 
  isEven directly to console.log, which takes 
  that value and outputs it to Terminal.
  */

