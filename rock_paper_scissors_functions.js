function playRound(playerSelection) {
    
    document.getElementById('winnerInfo').textContent = "";
    let computerSelection = getComputerChoice().toLowerCase(); 
  
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
    rounds++;

    document.getElementById("gameInfo").textContent = "Player: " + playerSelection + " Computer: " + computerSelection + " Round: " + rounds; 
    if(rounds === 5){    
      if(winCountPlayer > winCountComputer){
         document.getElementById("winnerInfo").textContent = "YOU WON WILL YOU GO TO DISNEYLAND NOW?!!!";
        }
      else{
         document.getElementById("winnerInfo").textContent = "WOW YOU LOST TO A COMPUTER, I BET YOU FEEL BAD?!!!";
        }
        rounds = 0;
      }
    
    
    
    document.getElementById('roundInfo').textContent = resultsString + " Player Wins: " + winCountPlayer + " Computer Wins: " + winCountComputer;
   
    

 
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
  let winCountPlayer = 0;
  let winCountComputer = 0;
  let rounds = 1;


  document.getElementById("gameInfo").textContent = "Round: " + rounds; 




  