 Code Plan:
 Assign object to variable stacks that contains 2 empty arrays and 1 array with the four different sized "pieces".
 Create function to print the stacks in the interface.
 Create function with two paramaters that moves the last item from an array in one property to another array in
 a different property in the object stacks.
 Create a function which spits out a true boolean if the user action is legal or a false boolean otherwise.
 Grab last number in the first array chosen by user and store it in starStackNumber.
 Grab last number in the second array chosen by user and store it in endAtackNumber.
 Create rules for a legal play that must be true for this function to output a true boolean.
 Rule 1. First value called user must be less than second value called by user in the interface, or the second value chosen by user must be an empty string.
 **When the user selects an empty string value for the second input it will be undefined. An undefined value cannot be compared to another number,
 so therefore we add || (stacks[endStack] == "") to add another qualifying condition for this rule when the second value chosen by user is an empty string. 
 Rule 2. Limits input value choices for the user, and makes it illegal to enter the same value into both inputs in the interface.
 Rule 3. This will prevent the user from adding an empty array space to another array.
 Create a function that checks if the user won.
 Create a function that Checks if the move is legal, and runs the movePiece function if it is. Also Checks if user won the game and outputs a messege if they did.
 Script begin.

 --------------------------------------------------------------
 'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Assign object to variable stacks that contains 2 empty arrays and 1 array with the four different sized "pieces".
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};
// Create function to print the stacks in the interface.
function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}
// Create function with two paramaters that moves the last item from an array in one property to another array in
// a different property in the object stacks.
function movePiece(startStack, endStack) {
  // Your code here
  return stacks[endStack].push(stacks[startStack].pop());
}
// Create a function which spits out a true boolean if the user action is legal or a false boolean otherwise.
function isLegal(startStack, endStack) {
  // Your code here
  // Grab last number in the first array chosen by user and store it in starStackNumber.
  let startStackNumber = (stacks[startStack][stacks[startStack].length - 1])
  // Grab last number in the second array chosen by user and store it in endAtackNumber.
  let endStackNumber = (stacks[endStack][stacks[endStack].length - 1])
  // Create rules for a legal play that must be true for this function to output a true boolean.
  // In order:
  // Rule 1. First value called user must be less than second value called by user in the interface, or the second value chosen by user must be an empty string.
  // **When the user selects an empty string value for the second input it will be undefined. An undefined value cannot be compared to another number,
  // so therefore we add || (stacks[endStack] == "") to add another qualifying condition for this rule when the second value chosen by user is an empty string. 
  if (((startStackNumber < endStackNumber) || (stacks[endStack] == ""))
    // Rule 2. Limits input value choices for the user, and makes it illegal to enter the same value into both inputs in the interface.
    && (((startStack === 'a') && (endStack === 'b' || endStack === 'c')) || ((startStack === 'b') && (endStack === 'a' || endStack === 'c')) || ((startStack === 'c') && (endStack === 'a' || endStack === 'b')))
    // Rule 3. This will prevent the user from adding an empty array space to another array.
    && (typeof (startStackNumber) !== "undefined")) {
    console.log('isLegal True')
    return true;
  }
  {
    return false;
  }
}
//Create a function that checks if the user won.
function checkForWin() {
  // Your code here
  if ((stacks.b.length === 4) || (stacks.c.length === 4)) {
    return true;
  } else {
    return false;

  }
}
// Create a function that Checks if the move is legal, and runs the movePiece function if it is. Also Checks if user won the game and outputs a messege if they did.
function towersOfHanoi(startStack, endStack) {
  // Your code here
  if (isLegal(startStack, endStack)) {

    movePiece(startStack, endStack)

  } else {
    console.log("Illegal move");

  } if (checkForWin()) {
    console.log('winner winner chicken dinner')
  }

}
function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
------------------------------------------------------------------
Script End.