// Hauptinitialisierung
let game; // Definiere `game` im globalen Scope

// start of everything

window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const gameAudio = document.getElementById("game-screen-audio");
  const game = new Game();
  const audioManager = new AudioManager();
  startButton.addEventListener("click", () => {
    game.start();
  });
  // restart after lost the game
  restartButton.addEventListener("click", () => {
    game.restart();
  });

  //audio play
  document.body.addEventListener(
    "click",
    () => {
      audioManager.playStartscreenAudio();
    },
    { once: true }
  );

  // the bird fly function by clicking the space botton

  document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
      if (game) {
        game.bird.jump(); // Jetzt sollte `game` definiert sein
      } else {
        console.log("loser!");
      }
    }
  });
};
