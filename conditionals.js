const raining = false;
const cold = false;
const temperature = 43;

if (temperature < 0){
  console.log(" Pick out your scarf!");
}

if (temperature < 15){
  console.log("Short sleeve won't cat it!")
}else {
  console.log("Short sleeve is fine!");
}

const isCitizen = true;
const age = 26;

if(isCitizen && age>18){
  console.log("You are eligible to vote");
}

if(temperature < -40 || temperature > 40){
  console.log("Maybe going outside isn't such a great idea");
}

if (!raining){
  console.log("Leave your umbrela at home");
}