let x = 0

squared = (i) => {
  if(i == 0){
    return 1
  }
  else {
    let before = squared(i-1);
    return before * 2
  }
}
for(var i=0;i<10; i++){
  console.log(squared(i));
}