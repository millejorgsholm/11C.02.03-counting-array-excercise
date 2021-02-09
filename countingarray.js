"use strict";

window.addEventListener("DOMContentLoaded", theArrayCounter);

//The array is const variable because it's not gonna change it's values, however the counter is going to change it's value (count) so it's a let variable
const arr = [];
let counter = 0;

function theArrayCounter() {
  //Adding an item in the beginning of the array with the unShift method
  arr.unshift(counter);
  //Adding +1s
  counter++;

  //Make sure that the array can't contain more than 9 items
  if (counter > 9) {
    //If array contains more than 9 items it'll remove the last item, which makes the array shorter. The pop method is used
    arr.pop(arr);
  }

  //Setting the counter to 1s (1000ms)
  setTimeout(theArrayCounter, 1000);

  //Making sure the array is appearing in the browser's console
  console.log(arr);
}
