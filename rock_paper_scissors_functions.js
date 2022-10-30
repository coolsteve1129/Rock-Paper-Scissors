function playRound(playerSelection, computerSelection) {
    
    playerSelection = prompt("Rock Paper or Scissors?").toLowerCase();

    alert("Player: " + playerSelection + " Computer: " + computerSelection)
    
    let resultsString = "Sorry buddy you lose, don't quit your day job...";
    if(playerSelection === "rock" && computerSelection === "scissors"){
        resultsString = "YOU WIN HOLY COW!!!"
        winCountPlayer++;
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        resultsString = "YOU WIN HOLY COW!!!"
        winCountPlayer++;
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        resultsString = "YOU WIN HOLY COW!!!"
        winCountPlayer++;
    }
    else if(playerSelection === computerSelection){
        resultsString = "No one wins so you're both losers";
        winCountPlayer--;
        winCountComputer--;

    }

    if(resultsString == "Sorry buddy you lose, don't quit your day job..."){
        winCountComputer++;
    }
    
   
    alert(resultsString + " Player Wins: " + winCountPlayer + " Computer Wins: " + winCountComputer);
    
    return resultsString;
  }

function getComputerChoice(){
     let randomNumber = Math.floor(Math.random() * 3);
     
     switch(randomNumber) {
        case 0:
            return "Rock"   
          break;
        case 1:
            return "Paper"
          break;
        case 2:          
            return "Scissors"
          break;
      }
}
  let rounds = 0;
  let winCountPlayer = 0;
  let winCountComputer = 0;

  const playerSelection = "";
  
  for(rounds = 1; rounds <= 5; rounds ++){
  const computerSelection = getComputerChoice().toLowerCase();
  console.log(playRound(playerSelection, computerSelection));  
  alert("rounds: " + rounds);
  if(rounds === 5){    
    if(winCountPlayer > winCountComputer){
        alert("YOU WON WILL YOU GO TO DISNEYLAND NOW?!!!");
      }
    else{
        alert("WOW YOU LOST TO A COMPUTER, I BET YOU FEEL BAD?!!!");
      }
    }
  }


  