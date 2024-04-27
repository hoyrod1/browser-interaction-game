console.log("=================== Hello World ===================");
//------------------------- Div Element -------------------------//
const div = document.getElementById("app");
div.style.backgroundColor = "lightgrey";
div.style.padding = "10px";
div.style.border = "3px solid #43C2D3";
div.style.borderRadius = "10px";
div.style.margin = "30px auto";
//---------------------------------------------------------------//
//------------------------- H1 Element --------------------------//
const h1 = document.createElement("h1");
h1.style.textAlign = "center";
h1.style.color = "white";
div.style.margin = "5px auto";
h1.textContent = "Let's Play a game for the nerds";
div.appendChild(h1);
//---------------------------------------------------------------//
//------------------------- H2 Element --------------------------//
const h2 = document.createElement("h2");
h2.style.textAlign = "center";
h2.style.color = "white";
div.style.margin = "5px auto";
h2.textContent = "Guess a number between 1 and 9";
div.appendChild(h2);
//---------------------------------------------------------------//
//----------------------- Button Element ------------------------//
const playButton = document.createElement("button");
playButton.style.color = "blue";
playButton.style.width = "500px";
playButton.style.padding = "5px";
playButton.style.display = "block";
playButton.style.margin = "auto";
playButton.textContent = "Start Game";
div.appendChild(playButton);
//---------------------------------------------------------------//
//------------------- Random Numbers For Game -------------------//
// Random number between 1 - 9
let randomGameNumber = Math.ceil(Math.random() * 10);
console.log(randomGameNumber);
//---------------------------------------------------------------//
//--------------------- Game Event Listener ---------------------//
playButton.addEventListener("click", playGame);

function playGame(e) {
  e.preventDefault();
  let gameCount = 5;
  let gameCounter = 5;
  let playerCount = 0;
  let pTag = document.createElement("p");
  while (playerCount < gameCount) {
    playButtonAns = Number(
      window.prompt(`You have ${gameCounter--} attempts try to Guess a number`)
    );
    if (playButtonAns !== null && playButtonAns === " ") {
      if (playButtonAns !== randomGameNumber) {
        if (playButtonAns < randomGameNumber) {
          pTag.style.padding = "15px";
          pTag.style.margin = "auto";
          pTag.style.textAlign = "center";
          pTag.style.color = "red";
          div.appendChild(pTag);
          pTag.textContent = `We are sorry you answer ${playButtonAns} is incorrect, please try a higher number next time in 5 seconds`;
          setTimeout(function () {
            location.reload();
          }, 9000);
        } else {
          pTag.style.padding = "15px";
          pTag.style.margin = "auto";
          pTag.style.textAlign = "center";
          pTag.style.color = "red";
          div.appendChild(pTag);
          pTag.textContent = `You answer ${playButtonAns} is incorrect, please try a lower number next time in 5 seconds`;
          setTimeout(function () {
            location.reload();
          }, 9000);
        }
      } else {
        pTag.style.padding = "15px";
        pTag.style.margin = "auto";
        pTag.style.textAlign = "center";
        pTag.style.color = "red";
        div.appendChild(pTag);
        pTag.textContent = `Congradulations, your answer ${playButtonAns} is correct!!!\n The game will restart soon`;
        // playerCount = 5;
        //-------------------- Reset Button Element ---------------------//
        // const resetButton = document.createElement("button");
        // resetButton.style.width = "500px";
        // resetButton.style.padding = "5px";
        // resetButton.style.display = "block";
        // resetButton.style.margin = "auto";
        // const resetATag = document.createElement("a");
        // resetATag.textContent = "Restart Game";
        // resetATag.style.color = "green";
        // resetATag.setAttribute("src", "index.html");
        // resetButton.appendChild(resetATag);
        // div.appendChild(resetButton);
        setTimeout(function () {
          location.reload();
        }, 9000);
        break;
      }
    } else {
      pTag.style.padding = "15px";
      pTag.style.margin = "auto";
      pTag.style.textAlign = "center";
      pTag.style.color = "red";
      div.appendChild(pTag);
      pTag.textContent = `We are sorry you did not make an entry`;
      break;
    }
    playerCount++;
  }
  console.log(playerCount);
}
//---------------------------------------------------------------//
