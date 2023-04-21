//version 1

// const bot1Choice = Math.floor(Math.random() * 3);
// const bot2Choice = Math.floor(Math.random() * 3);

// let bot1Score = 0;
// let bot2Score = 0;

// const rock = 0;
// const paper = 1;
// const cissors = 2;

// function pfc(a, b) {
//   while (bot1Score < 2 && bot2Score < 2) {
//     if (a === b) {
//       console.log("match nul");
//     } else if (
//       (a === rock && b === cissors) ||
//       (a === paper && b === rock) ||
//       (a === cissors && b === paper)
//     ) {
//       console.log("bot1 wins");
//       bot1Score++;
//       console.log(bot1Score);
//     } else {
//       console.log("bot 2 wins");
//       bot2Score++;
//       console.log(bot2Score);
//     }
//     a = Math.floor(Math.random() * 3);
//     b = Math.floor(Math.random() * 3);
//   }

//   if (bot1Score === 2) {
//     console.log("bot1 wins");
//   } else {
//     console.log("bot2 wins");
//   }
// }

// pfc(bot1Choice, bot2Choice);

//version 2

const CHOICES = ["pierre", "ciseaux", "papier"];
let bot1Score = 0;
let bot2Score = 0;

function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function Round(bot1Choice, bot2Choice) {
  console.log(`Bot 1 choisit ${bot1Choice}`);
  console.log(`Bot 2 choisit ${bot2Choice}`);

  if (bot1Choice === bot2Choice) {
    console.log("Match nul !");
  } else if (
    (bot1Choice === "pierre" && bot2Choice === "ciseaux") ||
    (bot1Choice === "ciseaux" && bot2Choice === "papier") ||
    (bot1Choice === "papier" && bot2Choice === "pierre")
  ) {
    console.log("Bot 1 gagne la manche !");
    bot1Score++;
  } else {
    console.log("Bot 2 gagne la manche !");
    bot2Score++;
  }
}

function playGame() {
  let manche = 0;
  while (bot1Score < 2 && bot2Score < 2) {
    console.log(`Manche ${manche++} :`);

    const bot1Choice = randomChoice(CHOICES);
    const bot2Choice = randomChoice(CHOICES);

    Round(bot1Choice, bot2Choice);
    console.log(`bot 1 = ${bot1Score}, bot2 = ${bot2Score}`);
  }

  if (bot1Score > bot2Score) {
    console.log("bot 1 wins");
  } else {
    console.log("bot 2 wins");
  }
}

playGame();
