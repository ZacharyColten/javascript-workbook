// 'use strict';
function pigLatin(word) {
  return word.toUpperCase();
}
function handleTranslate(){
  // 1. get the input value from the inputbox
  console.log("I am inside handleTranslate()");
  var inputBox = document.getElementById("plainText");
  console.log(inputBox);
  var englishWord = inputBox.value;
  console.log("english word", englishWord);
  // 2. call the pigLatin function with this value
  var pigLatinWord = pigLatin(englishWord);
  console.log("Pig Latin Word: ", pigLatinWord);
  // 3. write the result that the piglatin function returns to the sreen
var spanElement = document.getElementById("pigLatinWord");
console.log("span element", spanElement);

spanElement.innerText = pigLatinWord;

}
// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function pigLatin(word) {

//   // Your code here

// }


// function getPrompt() {
//   rl.question('word ', (answer) => {
//     console.log( pigLatin(answer) );
//     getPrompt();
//   });
// }
// Tests

// if (typeof describe === 'function') {

//   describe('#pigLatin()', () => {
//     it('should translate a simple word', () => {
//       assert.equal(pigLatin('car'), 'arcay');
//       assert.equal(pigLatin('dog'), 'ogday');
//     });
//     it('should translate a complex word', () => {
//       assert.equal(pigLatin('create'), 'eatecray');
//       assert.equal(pigLatin('valley'), 'alleyvay');
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin('egg'), 'eggyay');
//       assert.equal(pigLatin('emission'), 'emissionyay');
//     });
//     it('should lowercase and trim word before translation', () => {
//       assert.equal(pigLatin('HeLlO '), 'ellohay');
//       assert.equal(pigLatin(' RoCkEt'), 'ocketray');
//     });
//   });
// } else {

//   // getPrompt();

// }