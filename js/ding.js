class Ding {
  constructor(gameContainer) {
    this.element = document.createElement("div");
    this.element.className = "ding";
    gameContainer.appendChild(this.element);
    this.resetPosition();
  }

  resetPosition() {
    const screenHeight = window.innerHeight;
    const randomPosition = Math.floor(Math.random() * (screenHeight - 150)); // Verhindert, dass das Element zu weit unten erscheint
    this.element.style.top = `${randomPosition}px`;
    this.element.style.right = "-50px"; // Startet von rechts außerhalb des Bildschirms
    this.move();
  }

  move() {
    // Verwendet eine zufällige Dauer für die Animation, um Variation zu schaffen
    const duration = Math.random() * 3 + 2; // Zwischen 2 und 5 Sekunden
    this.element.style.animation = `moveDing ${duration}s linear infinite`;
  }

  stop() {
    this.element.style.animation = "none";
  }
}
