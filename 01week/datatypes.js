"use strict"

// Prints out the date and time when you pass a 'd' in console.log paramater.
var d = new Date();
console.log(d);

// A function that takes a number and converts it to a string. An 'If-Else' statement tests if the output is a string
// by using the operator 'typeof' in a strict comparison operator. It will return the output with a messege to confirm data type status. 
function numberToString(anyNumber) {
  var text = anyNumber.toString();
  if (typeof text === 'string') {
    return text + " updated to a String data type";
  }
  else {
    return text + " still a number";
  }
}
console.log(numberToString(8));

// A function that takes a string and converts it to a number. An 'If-Else' statement tests if the output is a number
// by using the operator 'typeof' in a strict comparison operator. It will return the output with a messege to confirm data type status. 
function stringToNumber(anyString) {
  var integer = parseInt(anyString, 10);
  if (typeof integer === 'number') {
    return integer + " updated to Number data type.";
  }
  else {
    return integer + " still a string";
  }
}
console.log(stringToNumber("38"));

// A function takes in different datatypes and prints out whether they are a: Boolean, Null, Undefined, Number, NaN, String
function testDataType(anyData) {
  //sets a condition where if its not a 'nan' data type, then it will run the switch statement in the else block of code.
  if (isNaN(anyData) == true && typeof anyData !== 'undefined' && typeof anyData !== 'string') { // * conditions were added with AND operaters because the output was showing up as "nan" for those two particular data type inputs
    return "You inputed a nan (not a number) data type";
  }
  else {

    switch (typeof anyData) {
      case 'boolean': return "You inputed a boolean data type";
        break;
      case 'undefined': return "You inputed a undefined data type";
        break;
      case 'number': return "You inputed a number data type";
        break;
      case 'string': return "You inputed a string data type";
        break;
      // default because null is no data type which means the only other possibility is null.
      default: return "You inputed a null data type";
    }
  }
}

console.log(testDataType(null));




