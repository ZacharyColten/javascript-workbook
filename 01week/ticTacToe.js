var player = 'X';
[...document.querySelectorAll('.cell')].forEach(function (cell) {
  cell.addEventListener('click', function () {
    if (this.innerText === '') {
      this.innerText = player;
      checkForWin(player)
      if (player === 'X') {
        player = 'O';
      } else {
        player = 'X';
      }
    }
  })
})

function checkForWin(playerTurn) {
  if (
    (document.querySelector('[data-cell="0"]').innerText === playerTurn &&
      document.querySelector('[data-cell="1"]').innerText === playerTurn &&
      document.querySelector('[data-cell="2"]').innerText === playerTurn
    ) || (
      document.querySelector('[data-cell="3"]').innerText === playerTurn &&
      document.querySelector('[data-cell="4"]').innerText === playerTurn &&
      document.querySelector('[data-cell="5"]').innerText === playerTurn
    )
  ) {
    alert(playerTurn + ' Wins!')
  }
}