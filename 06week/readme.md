CODE PLAN FOR DODGEBALL

1. Create a Person class template with methods to become player, join team, and add mascot.

2. Make an array list of people objects typed in by the dodgeball staff into the SAAS software. 

3. Make a variable called listOfPeople being declared at global scope, used for the updateLists function.
  listOfPeople stores a new array of objects with the Person Class.
4. Run an updateLists function everytime a button is clicked in this application. It updates the lists by running all     the functions after filtering out the players to their specified variables: nonPeople, people, redTeamPlayers, and        blueTeamPlayers.
5. Make a function that makes the original list of people with "make player" buttons. This function takes in nonpeople (  from updateLists function).
  Add eventListeners to each button 'click' - turns the nonplayers represented by that button into a player,
  then updateLists function gets ran.
6. Make a function that makes the player list of people with join team color buttons. This function takes in people       (from updateLists function).
  Add eventListeners to each button 'click' - turns the players represented by that button into a team player
  then updateLists function gets ran.
7. Make a function that creates red team players and adds a Mascot. takes in redTeamPlayers from updateLists function.
8. Make a function that creates blue team players and adds a Mascot. takes in blueTeamPlayers from updateLists function.
Create Tests.