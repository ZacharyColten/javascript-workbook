let grades = [60,25,15,5,2];

//write a higher order function t oprint every value in the array
let printThem = function(eachGrade){
console.log(eachGrade);

}

grades.forEach(printThem);

for(let i=0; i<grades.length; i++) {
  var value = grades[i];
  console.log(value);
}
