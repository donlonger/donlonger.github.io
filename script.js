let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let userScore = document.getElementById("userScore"); 
let computerScore = document.getElementById("computerScore");
let userChoice = document.getElementById("userChoice");
let array = [rock.id, paper.id, scissors.id];
let elements = document.getElementsByClassName('hide');
let numberUser = userScore.innerHTML;
let numberComputer = computerScore.innerHTML;

function computerPlay() {
    let result = array[Math.floor(Math.random() * array.length)];
    return result;
}

function userPlay(id) {
    if (id == rock.id) {
        return rock.id;
    }
    else if(id == paper.id) {
       return paper.id;
    }
    else if(id == scissors.id) {
        return scissors.id; 
    }
}

function animation(id) {
  let animation = document.getElementById(`comp${id}`).animate([
    // keyframes
    { background: 'none' },
    { transform: 'scale(1.2)' },
    { transform: 'scale(1)' },
    { background: 'url(/img/rock.png)' },
    { transform: 'scale(1.2)' },
    { transform: 'scale(1)' },
    { background: 'url(/img/rock.png)' },
    { transform: 'scale(1.2)' },
    { transform: 'scale(1)' },
    { background: 'url(/img/rock.png)' },
    { transform: 'scale(1.2)' },
    { transform: 'scale(1)' }
  ], {
    // timing options
    duration: 1600,
  });

  return animation;
}

let delay = 1600;


function playRound(userPlay, computerPlay) {

    function computerWinFormula() {
        console.log(`You selected ${userPlay}, computer selected ${computerPlay}. Computer Won`);
        document.getElementsByClassName(`computer${computerPlay}`)[0].style.display='flex';
        userChoice.setAttribute("id", `${userPlay}`);
        userChoice.setAttribute("class", `userChoiceStyle ${userPlay}-sizer item`);
        setTimeout(function () {
          numberComputer++;
          computerScore.innerHTML = numberComputer;
        }, delay);
        document.getElementById("computerScore").animate([
            // keyframes
            { transform: 'scale(1.5)' },
            { transform: 'scale(1)' }
          ], {
            // timing options
            duration: 700,
            delay: 1600,
          });

        animation(computerPlay);
        document.getElementsByClassName(`userChoiceStyle`)[0].animate([
          // keyframes
          { background: 'none' },
          { transform: 'scale(1.2)' },
          { transform: 'scale(1)' },
          { background: 'url(/img/rock.png)' },
          { transform: 'scale(1.2)' },
          { transform: 'scale(1)' },
          { background: 'url(/img/rock.png)' },
          { transform: 'scale(1.2)' },
          { transform: 'scale(1)' },
          { background: 'url(/img/rock.png)' },
          { transform: 'scale(1.2)' },
          { transform: 'scale(1)' }
        ], {
          // timing options
          duration: 1600,
        });
    }

    function userWinFormula() {
        console.log(`You selected ${userPlay}, computer selected ${computerPlay}. You've Won`);
        document.getElementsByClassName(`computer${computerPlay}`)[0].style.display='flex';
        userChoice.setAttribute("id", `${userPlay}`);
        userChoice.setAttribute("class", `userChoiceStyle ${userPlay}-sizer item`); 
        setTimeout(function () {
          numberUser++;
          userScore.innerHTML = numberUser;
        }, delay);
        document.getElementById("userScore").animate([
            // keyframes
            { transform: 'scale(1.5)' },
            { transform: 'scale(1)' }
          ], {
            // timing options
            duration: 700,
            delay: 1600,
          });

          animation(computerPlay);

          document.getElementsByClassName(`userChoiceStyle`)[0].animate([
            // keyframes
            { background: 'none' },
            { transform: 'scale(1.2)' },
            { transform: 'scale(1)' },
            { background: 'url(/img/rock.png)' },
            { transform: 'scale(1.2)' },
            { transform: 'scale(1)' },
            { background: 'url(/img/rock.png)' },
            { transform: 'scale(1.2)' },
            { transform: 'scale(1)' },
            { background: 'url(/img/rock.png)' },
            { transform: 'scale(1.2)' },
            { transform: 'scale(1)' }
          ], {
            // timing options
            duration: 1600,
          });

    }



    for(var i=0; i < elements.length; i++) {  
        document.getElementsByClassName("hide")[i].style.display = 'none';    
    }

    if(userPlay == "rock" && computerPlay =="paper") {
        computerWinFormula();
    }
    else if(userPlay == "rock" && computerPlay =="scissors") {
        userWinFormula();
    }
    else if(userPlay == "paper" && computerPlay =="scissors") {
        computerWinFormula();
    }
    else if(userPlay == "paper" && computerPlay =="rock") {
        userWinFormula();
    }
    else if(userPlay == "scissors" && computerPlay =="paper") {
        userWinFormula();
    }
    else if(userPlay == "scissors" && computerPlay =="rock") {
        computerWinFormula();
    }
    else {
        console.log(`You selected ${userPlay}, computer selected ${computerPlay}. It's a tie`);
        document.getElementsByClassName(`computer${userPlay}`)[0].style.display='flex';
        userChoice.setAttribute("id", `${userPlay}`);
        userChoice.setAttribute("class", `userChoiceStyle ${userPlay}-sizer item`);
        document.getElementById(`comp${computerPlay}`).animate([
            // keyframes
            { transform: 'scale(1.5)' },
            { transform: 'scale(1)' }
          ], {
            // timing options
            duration: 700,
          });
        animation(computerPlay);
        document.getElementsByClassName(`userChoiceStyle`)[0].animate([
          // keyframes
          { background: 'none' },
          { transform: 'scale(1.2)' },
          { transform: 'scale(1)' },
          { background: 'url(/img/rock.png)' },
          { transform: 'scale(1.2)' },
          { transform: 'scale(1)' },
          { background: 'url(/img/rock.png)' },
          { transform: 'scale(1.2)' },
          { transform: 'scale(1)' },
          { background: 'url(/img/rock.png)' },
          { transform: 'scale(1.2)' },
          { transform: 'scale(1)' }
        ], {
          // timing options
          duration: 1600,
        });
    }
}