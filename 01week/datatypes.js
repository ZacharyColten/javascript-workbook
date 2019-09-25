"use strict"

// Prints out the date and time.
function displayDate() {
  document.getElementById("showDate").innerHTML = Date();
}
// A function that takes a number and converts it to a string. An 'If-Else' statement tests if the output is a string
// by using the operator 'typeof' in a strict comparison operator. It will return the output with a messege to confirm data type status. 
function numberToString(anyNumber) {
  anyNumber = document.getElementById('number').value
  var text = anyNumber.toString();
  if (typeof text === 'string') {
    document.getElementById("showString").innerHTML = text + " updated to a String data type";
    
  }
  else {
    document.getElementById("showString").innerHTML = text + " still a number";
  }
  
}

// A function that takes a string and converts it to a number. An 'If-Else' statement tests if the output is a number
// by using the operator 'typeof' in a strict comparison operator. It will return the output with a messege to confirm data type status. 
function stringToNumber(anyString) {
  anyString = document.getElementById('string').value
  var integer = parseInt(anyString, 10);
  if (typeof integer === 'number') {
    document.getElementById("showNumber").innerHTML = integer + " updated to a Number data type";
    
  }
  else {
    document.getElementById("showNumber").innerHTML = integer + " still a string";
    
  }
}

// A function takes in different datatypes and prints out whether they are a: Boolean, Null, Undefined, Number, NaN, String
function testDataType(anyData) {
  anyData = document.getElementById('input1').value;
  //sets a condition where if its not a 'nan' data type, then it will run the switch statement in the else block of code.
  if (isNaN(anyData) == true && typeof anyData !== 'undefined' && typeof anyData !== 'string') { // * conditions were added with AND operaters because the output was showing up as "nan" for those two particular data type inputs
  document.getElementById("showDataType").innerHTML = anyData + "You inputed a NaN (not a number) data type";
  
  }
  else {

    switch (typeof anyData) {
      case 'boolean': document.getElementById("showDataType").innerHTML = anyData + " is a boolean data type";
        break;
      case 'undefined': document.getElementById("showDataType").innerHTML = anyData + " is a undefined data type";
        break;
      case 'number': document.getElementById("showDataType").innerHTML = anyData + " is a number data type";
        break;
      case 'string': document.getElementById("showDataType").innerHTML = anyData + " is a string data type";
      // default because null is no data type which means the only other possibility is null.
      default: document.getElementById("showDataType").innerHTML = anyData + " is a null data type";
    }
  }
}

// A function that takes in two numbers or strings and adds them together. 
function addTwoNumbers(a,b) {
  var a = document.getElementById('inputA').value;
  var b = document.getElementById('inputB').value;
  var c = parseInt(a) + parseInt(b)
  document.getElementById("twoNumbersAdded").innerHTML = c + " is the sum of these two numbers";

}




