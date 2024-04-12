class Bird {
  constructor(yPosition) {
    this.element = document.querySelector(".pepie-img");
    this.yPosition = yPosition;
    this.velocity = 0;
  }

  jump() {
    this.velocity = -10;

    // Negativer Wert für den Aufwärtsschub
  }

  updatePosition(gravity) {
    this.velocity += gravity;
    this.yPosition += this.velocity;

    // Aktualisiere die Position des Vogels im DOM
    this.element.style.top = `${this.yPosition}px`;
  }

  isOffScreen() {
    const screenHeight = window.innerHeight;
    // Hier überprüfen wir, ob der Vogel den unteren oder oberen Bildschirmrand überschreitet
    return this.yPosition < 0 || this.yPosition > screenHeight;
  }

  reset() {
    this.yPosition = 300; // Startposition
    this.velocity = 0;
    this.updatePosition(0);
  }
}
