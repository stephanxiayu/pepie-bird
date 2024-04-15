class Bird {
  constructor(yPosition) {
    this.element = document.querySelector(".pepie-img");
    this.yPosition = yPosition;
    this.velocity = 0;
  }
  // jumping of the bird
  jump() {
    this.velocity = -10;

    // Negativer Wert für den Aufwärtsschub
  }
  // gravity of the bird, it fell out of the screen without jump
  updatePosition(gravity) {
    this.velocity += gravity;
    this.yPosition += this.velocity;
    this.element.style.top = `${this.yPosition}px`;
  }
  // the screen, when the bird leave the top screen end or botton screen
  isOffScreen() {
    const screenHeight = window.innerHeight;

    return this.yPosition < 0 || this.yPosition > screenHeight;
  }
  // reset the bird
  reset() {
    this.yPosition = 300; // Startposition
    this.velocity = 0;
    this.updatePosition(0);
  }
}
