class AudioManager {
  constructor() {
    this.startscreenAudio = document.getElementById("start-screen-audio");
    // Musik, die während des Spiels läuft
    this.loserAudio = document.getElementById("loser-audio"); // Musik für den Game-Loser-Screen
    this.backgroundAudio = document.getElementById("game-screen-audio"); // Hintergrundmusik auf dem Startbildschirm
  }

  playStartscreenAudio() {
    this.startscreenAudio
      .play()
      .catch((error) => console.error("Error playing the game audio:", error));
  }

  stopStartscreenAudio() {
    console.log("Stopping startscreen audio", this.startscreenAudio);
    this.startscreenAudio.pause();
    this.startscreenAudio.currentTime = 0;
  }

  playLoserAudio() {
    this.loserAudio
      .play()
      .catch((error) => console.error("Error playing the loser audio:", error));
  }

  stopLoserAudio() {
    this.loserAudio.pause();
    this.loserAudio.currentTime = 0;
  }

  playBackgroundAudio() {
    this.backgroundAudio
      .play()
      .catch((error) =>
        console.error("Error playing the background audio:", error)
      );
  }

  stopBackgroundAudio() {
    this.backgroundAudio.pause();
    this.backgroundAudio.currentTime = 0;
  }
}
