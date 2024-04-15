class Ding {
  constructor(gameContainer) {
    this.element = document.createElement("div");
    this.element.className = "ding";
    gameContainer.appendChild(this.element);
    this.resetPosition();
  }

  resetPosition() {
    const screenHeight = window.innerHeight;
    const randomPosition = Math.floor(Math.random() * (screenHeight - 150)); // that the obsticale goes to far out of the screen
    this.element.style.top = `${randomPosition}px`;
    this.element.style.right = "-50px"; // the obsticlale start from the right screen outside the screen
    this.move();
  }

  move() {
    // moving of the obsticale
    const duration = Math.random() * 4 + 2; // Zwischen 2 und 5 Sekunden
    this.element.style.animation = `moveDing ${duration}s linear infinite`;
  }

  stop() {
    this.element.style.animation = "none";
  }
}
