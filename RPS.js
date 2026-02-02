

const score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
  
    let resetTimer;

    const moveImages = {
      Rock: '<img src="rock.png" alt="Rock" width="40" height="40">',
      Paper: '<img src="page_facing_up.png" alt="Rock" width="40" height="40">',
      Scissors: '<img src="scissors.png" alt="Rock" width="40" height="40">',
    };


    function playGame(playerMove) {

      clearTimeout(resetTimer)

      const computerMove =pickComputerMove();
      let result='';


      if(playerMove === 'Rock') {
          if (computerMove === 'Rock') {
          result='Tie';}
            else if (computerMove === 'Paper') {
            result='Lose';}
              else if (computerMove === 'Scissors') {
              result= 'Win';}
        }
      
      
      if(playerMove === 'Paper') {              
        
        if (computerMove === 'Rock') {
          result='Win';}
          else if (computerMove === 'Paper') {
            result='Tie';}
            else if (computerMove === 'Scissors') {
              result= 'Lose';}

        }


      if(playerMove === 'Scissors') {
        
        if (computerMove === 'Rock') {
          result='Lose';}
          else if (computerMove === 'Paper') {
            result='Win';}
            else if (computerMove === 'Scissors') {
              result= 'Tie';}

      }

        if(result === 'Win') {
          score.wins = score.wins +1;
        } else if (result === 'Lose') {
          score.losses = score.losses +1;
        } else if (result === 'Tie') {
          score.ties = score.ties +1;
        }
        document.getElementsByClassName('RES')[0] .textContent = ` You ${result}`
        document.getElementsByClassName('PM')[0] .innerHTML = ` ${moveImages[playerMove]}`;
        document.getElementsByClassName('CM')[0] .innerHTML = ` ${moveImages[computerMove]}`;


        resetTimer = setTimeout(function() {
          document.getElementsByClassName('PM')[0] .textContent = '';
          document.getElementsByClassName('RES')[0] .textContent = "LET'S PLAY";
          document.getElementsByClassName('CM')[0] .textContent = '';
        }, 1500)


        document.getElementsByClassName('wscore')[0].textContent = score.wins;
        document.getElementsByClassName('lscore')[0].textContent = score.losses;
        document.getElementsByClassName('tscore')[0].textContent = score.ties;
      
      
      }

      function Reset(Newscore) {

        clearTimeout(resetTimer);

        if (Newscore === 'Reset_score') {
          score.wins = 0;
          score.ties = 0;
          score.losses = 0;
        }

        document.getElementsByClassName('wscore')[0].textContent = score.wins
        document.getElementsByClassName('lscore')[0].textContent = score.losses
        document.getElementsByClassName('tscore')[0].textContent = score.ties

        document.getElementsByClassName('RES')[0] .textContent = `SCORE WAS RESET`
        document.getElementsByClassName('PM')[0] .textContent = ``;
        document.getElementsByClassName('CM')[0] .textContent = ``;

        setTimeout(function(){
          document.getElementsByClassName('RES')[0] .textContent = "LET'S PLAY"
        }, 1500)

      }



    function pickComputerMove(){

      const randomNumber = Math.random();

      let computerMove = '';


        if (randomNumber >= 0 && randomNumber < 1/3) {
          computerMove ='Rock';}

        else if(randomNumber >= 1/3 && randomNumber <2/3){
          computerMove ='Paper';}

        else if(randomNumber >= 2/3 && randomNumber <1){
          computerMove ='Scissors';}

      return computerMove;


          console.log (score)
    }