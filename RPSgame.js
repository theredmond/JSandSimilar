console.log('hi');
console.log('Let\'s Play Rock Paper Scissors');
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    console.log('you have chosen ' + userInput);
    return userInput
  } else{ console.log('This is not a valid selection');}
}
const getComputerChoice = () =>{
  let choice = Math.floor(Math.random()*3);
  switch (choice){
    case 0:
    choice = 'rock';
    console.log('The computer chose rock');
    return choice;
    break;
    case 1:
    choice = 'paper';
    console.log('The computer chose paper');
    return choice;
    break;
    case 2:
    choice = 'scissors';
    console.log('The computer chose scissors')
    return choice;
    break;
    default:
    console.log('an error has occured');

  }
}

const determineWinner = (userChoice, computerChoice) =>{
  if (userChoice === computerChoice){
    console.log(`You both Chose ${computerChoice}. It is a draw.`)
  } else if (userChoice === 'rock' && computerChoice === 'scissors'){
      console.log('You have won!');
  } else if(userChoice === 'paper' && computerChoice == 'rock'){
    console.log('You have won!');
  } else if (userChoice === 'scissors' && computerChoice === 'paper'){
    console.log('You have won!');
  } else{
    console.log('You have lost!');
  }
}

determineWinner(getUserChoice('scissors'), getComputerChoice());
