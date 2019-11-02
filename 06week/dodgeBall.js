
//Create a Person class template with methods to become player, join team, and add mascot.
class Person {
  constructor(id, name, age, skillSet, placeBorn) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
    this.team = false;
    this.player = false;
    this.mascot = false;
  }

  becomePlayer() {
    this.player = true;
  }

  joinTeam(color) {
    this.team = color;
  }

  addMascot(character) {
    this.mascot = character
  }




}
// Just an array list of people objects typed in by the dodgeball staff into our SAAS software. 
const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]
////This is a variable called listOfPeople being declared at global scope, used for the updateLists function.
////listOfPeople stores a new array of objects with the Person Class
window.listOfPeople = arrOfPeople.map(peep => {
  return new Person(peep.id, peep.name, peep.age, peep.skillSet, peep.placeBorn);
})

//run this function everytime a button is clicked in this application. It updates the lists by running all the functions
//after filtering out the players to their specified variables nonPeople, people, redTeamPlayers, and blueTeamPlayers.
function updateLists() {
  nonPeople = listOfPeople.filter(person => !person.player);
  createPeopleList(nonPeople)
  console.log(nonPeople)

  people = listOfPeople.filter(person => person.player && !person.team);
  createPlayerList(people)
  console.log(people)

  redTeamPlayers = listOfPeople.filter(person => person.player && person.team === 'red');
  createRedTeamList(redTeamPlayers)
  console.log(redTeamPlayers)

  blueTeamPlayers = listOfPeople.filter(person => person.player && person.team === 'blue');
  createBlueTeamList(blueTeamPlayers)
  console.log(blueTeamPlayers)
}
//Creates the original list of people with "make player" buttons. This function takes in nonpeople (from updateLists function)
function createPeopleList(nonPeopleList) {
  document.querySelector('#people').innerHTML = '';
  nonPeopleList.forEach(person => {
    document.querySelector('#people').insertAdjacentHTML('beforeend', `
      <li>${person.name}<button data-id="${person.id}">Make Player</button></li>
    `)
  })
  // Adds eventListeners to each button 'click' - turns the nonplayers represented by that button into a player,
  // then updateLists function gets ran.
  document.querySelectorAll('#people button').forEach(function (el) {
    el.addEventListener('click', function () {
      nonPeopleList.find(person => {
        return person.id === Number(this.getAttribute('data-id'))
      }).becomePlayer();
      updateLists();
    })
  })
}
//Creates the player list of people with join team color buttons. This function takes in people (from updateLists function)
function createPlayerList(nonplayerList) {
  document.querySelector('#players').innerHTML = '';
  nonplayerList.forEach(person => {
    document.querySelector('#players').insertAdjacentHTML('beforeend', `
      <li>${person.name}<button data-id="${person.id}" data-color="red">Join Red Team</button>
      <button data-id="${person.id}" data-color="blue" >Join Blue Team</button></li>
    `)
  })
  // Adds eventListeners to each button 'click' - turns the players represented by that button into a team player
  // then updateLists function gets ran.
  document.querySelectorAll('#players button').forEach(function (el) {
    el.addEventListener('click', function () {
      var color = this.getAttribute('data-color')
      nonplayerList.find(person => {
        return person.id === Number(this.getAttribute('data-id'))
      }).joinTeam(color)
      updateLists();
    })
  })
}
// Creates red team players and adds a Mascot. takes in redTeamPlayers from updateLists function
function createRedTeamList(playerList) {
  document.querySelector('#red').innerHTML = '';
  playerList.forEach(person => {
    person.addMascot("Tigers")
    document.querySelector('#red').insertAdjacentHTML('beforeend', `
      <li>${person.name} <b>${person.mascot}</b></li> 
    `)
  })

}
// Creates blue team players and adds a Mascot. takes in blueTeamPlayers from updateLists function
function createBlueTeamList(playerList) {
  document.querySelector('#blue').innerHTML = '';
  playerList.forEach(person => {
    person.addMascot("Panthers")
    document.querySelector('#blue').insertAdjacentHTML('beforeend', `
      <li>${person.name} <b>${person.mascot}</b></li>
    `)
  })

}

//tests
if (typeof describe === 'function') {

  describe('#createPeopleList()', () => {
    it('should make a new array (people)', () => {
      createPeopleList(nonPeople);
      assert.equal(people, [{
        id: 2,
        name: "Charles Young",
        age: 55,
        skillSet: "welding",
        placeBorn: "Omaha, Nebraska"
      },
      {
        id: 3,
        name: "Judy Twilight",
        age: 35,
        skillSet: "fishing",
        placeBorn: "Louisville, Kentucky"
      },
      {
        id: 4,
        name: "Cynthia Doolittle",
        age: 20,
        skillSet: "tic tac toe",
        placeBorn: "Pawnee, Texas"
      },
      {
        id: 5,
        name: "John Willouby",
        age: 28,
        skillSet: "pipe fitting",
        placeBorn: "New York, New York"
      },
      {
        id: 6,
        name: "Stan Honest",
        age: 20,
        skillSet: "boom-a-rang throwing",
        placeBorn: "Perth, Australia"
      },
      {
        id: 7,
        name: "Mia Watu",
        age: 17,
        skillSet: "acrobatics",
        placeBorn: "Los Angeles, California"
      },
      {
        id: 8,
        name: "Walter Cole",
        age: 32,
        skillSet: "jump rope",
        placeBorn: "New Orleans, Louisiana"
      }]
      );
    });
  });

  describe('#createPlayerList()', () => {
    it('should turn a person into a player', () => {
      createPlayerList(people)
      assert.equal();
    });

  });
  describe('#createRedTeamList()', () => {
    it('should put a player on red team', () => {
      createRedTeamList(redTeamPlayers)
      assert.equal();
    });
  });

} else {

  getPrompt();

}