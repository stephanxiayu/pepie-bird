window.onload = function () {
  // Starte das Audio bei einem Klick irgendwo auf dem Bildschirm.
  // Beachte, dass dies aufgrund von Browser-Richtlinien möglicherweise nicht funktioniert, bis der Benutzer interagiert hat.
  document.body.addEventListener(
    "click",
    function playAudio() {
      // var audio = document.getElementById("start-screen-audio1");
      // audio
      //   .play()
      //   .catch((error) => console.error("Error playing the audio:", error));
    },
    { once: true }
  ); // Führe dies nur einmal aus.

  // Wechsle zum Game-Screen, wenn der "Start Game"-Button geklickt wird.
  document
    .getElementById("start-button")
    .addEventListener("click", function () {
      // var audio = document.getElementById("start-screen-audio1");
      // audio.pause(); // Stoppt die Wiedergabe des Audios
      // audio.currentTime = 0;
      document.getElementById("pepie");
      document.getElementById("game-intro").style.display = "none";

      // Zeige den Game-Screen an
      document.getElementById("game-container").style.display = "block";
      // var audio = document.getElementById("game-screen-audio1");
      // audio
      //   .play()
      //   .catch((error) => console.error("Error playing the audio:", error));
    });
};
