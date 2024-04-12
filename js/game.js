class Game {
  constructor() {
    this.gameContainer = document.getElementById("game-container");
    this.gameIntro = document.getElementById("game-intro");
    this.gameLoserScreen = document.getElementById("game-loser");
    this.bird = new Bird(300); // Annahme, dass die y-Position des Vogels 300 ist
    this.dings = [];
    this.gravity = 0.5;
    this.gameIsOver = false;
    this.gameLoopIntervalId = null;
    this.audioManager = new AudioManager();
    this.startTime = null;
    this.timerInterval = null;
    this.playTimes = []; // Speichert die Spielzeitens
  }

  startTimer() {
    this.startTime = Date.now();
    this.timerInterval = setInterval(() => {
      const elapsed = Date.now() - this.startTime;
      const minutes = Math.floor(elapsed / 60000);
      const seconds = ((elapsed % 60000) / 1000).toFixed(0);
      document.getElementById("timer").textContent =
        minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }, 1000); // Aktualisiere den Timer jede Sekunde
  }

  stopTimer() {
    clearInterval(this.timerInterval);
    document.getElementById("timer").textContent = "0:00"; // Timer zurücksetzen
  }
  checkCollision(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    );
  }
  savePlayTime() {
    const elapsed = Date.now() - this.startTime; // Millisekunden seit Spielstart
    const secondsElapsed = Math.floor(elapsed / 1000); // Umwandlung in Sekunden
    this.playTimes.push(secondsElapsed); // Füge die Zeit in Sekunden zur Liste hinzu
    this.updateTimeList();
  }

  // Aktualisiere die Liste auf dem Loser-Screen mit den gespeicherten Zeiten
  updateTimeList() {
    const listElement = document.getElementById("time-list");
    listElement.innerHTML = ""; // Lösche die bestehenden Listeneinträge

    // Sortiere die Zeiten absteigend
    const sortedTimes = this.playTimes.sort((a, b) => b - a);

    // Konvertiere die Sekunden zurück in das `mm:ss`-Format für die Anzeige
    sortedTimes.forEach((timeInSeconds) => {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;
      const timeString = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

      const listItem = document.createElement("li");
      listItem.textContent = timeString;
      listElement.appendChild(listItem);
    });
  }
  start() {
    // Verstecke das Intro und zeige das Spiel
    this.gameIntro.style.display = "none";
    this.gameContainer.style.display = "block";
    this.startTimer();
    setInterval(() => this.addDing(), 2000);
    // Starte die Game-Loop
    this.audioManager.stopStartscreenAudio();
    this.gameLoopIntervalId = setInterval(this.gameLoop.bind(this), 1000 / 60);
    this.audioManager.playBackgroundAudio();
  }

  gameLoop() {
    this.bird.updatePosition(this.gravity);

    if (this.bird.isOffScreen()) {
      this.endGame();
    }
  }

  addDing() {
    const ding = new Ding(this.gameContainer);
    this.dings.push(ding);

    // Optional: Entferne das Ding-Element nach dem Ende der Animation,
    // um das DOM sauber zu halten
    setTimeout(() => {
      this.gameContainer.removeChild(ding.element);
      this.dings = this.dings.filter((d) => d !== ding);
    }, 5000); // Stelle sicher, dass dies länger ist als die längste Animationsdauer
  }

  endGame() {
    clearInterval(this.gameLoopIntervalId);
    this.gameContainer.style.display = "none";
    this.gameLoserScreen.style.display = "block";
    this.gameIsOver = true;
    this.savePlayTime(); // Speichere die aktuelle Spielzeit
    this.stopTimer();
    this.audioManager.stopBackgroundAudio();
    this.audioManager.playLoserAudio();
  }

  restart() {
    // Stoppe jegliche Spiel-Loop-Intervalle oder Animation Frames
    this.gameIsOver = false;
    clearInterval(this.gameLoopIntervalId);

    // Setze alle Spielvariablen zurück
    this.bird.reset();
    // Setze weitere Spielzustände zurück, wie die Position der Hindernisse etc.

    // Verstecke den Game-Loser-Screen und zeige den Game-Container
    this.gameLoserScreen.style.display = "none";
    this.gameContainer.style.display = "block";

    // Stelle sicher, dass Audios richtig gesteuert werden
    this.audioManager.stopLoserAudio();
    // this.audioManager.playGameAudio();

    // Starte das Spiel erneut
    this.start();
  }
}
