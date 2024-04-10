class Game {
  constructor() {
    this.gameLoopFrequency = Math.round(1000 / 60); // 60fps
  }

  initGame() {
    document.body.addEventListener(
      "click",
      function playAudio() {
        var audio = document.getElementById("start-screen-audio");
        audio
          .play()
          .catch((error) => console.error("Error playing the audio:", error));
      },
      { once: true }
    ); // Führe dies nur einmal aus.
  }

  start() {
    document
      .getElementById("start-button")
      .addEventListener("click", function () {
        var audio = document.getElementById("start-screen-audio");
        audio.pause(); // Stoppt die Wiedergabe des Audios
        audio.currentTime = 0;
        document.getElementById("pepie");
        document.getElementById("game-intro").style.display = "none";

        // Zeige den Game-Screen an
        document.getElementById("game-container").style.display = "block";
        var audio = document.getElementById("game-screen-audio");
        audio
          .play()
          .catch((error) => console.error("Error playing the audio:", error));
      });

    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  // update() {
  //   this.player.move();
  //   // Check for collision and if an obstacle is still on the screen
  //   for (let i = 0; i < this.obstacles.length; i++) {
  //     const obstacle = this.obstacles[i];
  //     obstacle.move();

  //     // If the player's car collides with an obstacle
  //     if (this.player.didCollide(obstacle)) {
  //       // Remove the obstacle element from the DOM
  //       obstacle.element.remove();
  //       // Remove obstacle object from the array
  //       this.obstacles.splice(i, 1);
  //       // Reduce player's lives by 1
  //       this.lives--;
  //       // Update the counter variable to account for the removed obstacle
  //       i--;
  //     } // If the obstacle is off the screen (at the bottom)
  //     else if (obstacle.top > this.height) {
  //       // Increase the score by 1
  //       this.score++;
  //       // Remove the obstacle from the DOM
  //       obstacle.element.remove();
  //       // Remove obstacle object from the array
  //       this.obstacles.splice(i, 1);
  //       // Update the counter variable to account for the removed obstacle
  //       i--;
  //     }
  //   }

  //   // If the lives are 0, end the game
  //   if (this.lives === 0) {
  //     this.endGame();
  //   }

  //   // Create a new obstacle based on a random probability
  //   // when there is no other obstacles on the screen
  //   if (Math.random() > 0.98 && this.obstacles.length < 1) {
  //     this.obstacles.push(new Obstacle(this.gameScreen));
  //   }
  // }
  gameLoop() {
    console.log("in the game loop");

    this.update();

    // If "gameIsOver" is set to "true" clear the interval to stop the loop
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }
  }
}
