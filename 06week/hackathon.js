



let computerChoice = [H,E,L,L,O];
let playSpace = []
let blah = function playGame(guess){
  for(i=0;i<computerChoice.length;i++){
    if (guess == computerChoice[i]){
      playSpace.push(guess)
      console.log(playSpace)
    }
    playGame(guess)
  }
}
console.log(blah)