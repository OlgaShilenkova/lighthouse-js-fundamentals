const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

/*
with FOR LOOP
console.log("Kitchen staff to pack");
for ( let i = 0; i<packingList.length; i++){
  console.log(packingList[i]);
}
*/


// with while loop
console.log("Kitchen staff to pack:")
let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  // keep this i++ inside {}, otherwise indefinite loop happen
  i++;
}