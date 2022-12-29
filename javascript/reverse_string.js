/*

UP:
Reverse the string

MP:
- split the string to make it an array
- use the reverse method on the array
- join it back together to turn it back into a string

*/

function reverseString(str) {
 return str.split("").reverse().join("")
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
