// Hauptinitialisierung
let game; // Definiere `game` im globalen Scope

window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const gameAudio = document.getElementById("game-screen-audio");
  const game = new Game();
  const audioManager = new AudioManager();
  startButton.addEventListener("click", () => {
    game.start();
  });

  restartButton.addEventListener("click", () => {
    game.restart(); // Lade die Seite neu, um das Spiel neu zu starten
  });

  document.body.addEventListener(
    "click",
    () => {
      // audioManager.playStartscreenAudio();
    },
    { once: true }
  );
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

// Füge noch Event-Listener für die Tastatureingabe hinzu, um den Vogel zu steuern
