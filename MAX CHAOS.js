const startBtn = document.getElementById("startBtn");
const popup = document.getElementById("popup");
const sound = document.getElementById("memeSound");

let started = false;

startBtn.addEventListener("click", async () => {
  if (started) return;
  started = true;

  try {
    sound.currentTime = 0;
    sound.volume = 1;
    await sound.play();
    console.log("sound playing");
  } catch (err) {
    console.error("Sound failed:", err);
    alert("Sound failed. Test this in your browser: http://127.0.0.1:5500/meme.mp3");
  }

  setInterval(() => {
    document.body.style.background =
      `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  }, 300);

  setInterval(() => {
    popup.style.display = popup.style.display === "none" ? "block" : "none";
  }, 1200);

  setInterval(() => {
    document.title =
      document.title === "😂 YOU LOST 😂"
        ? "ISHOWSPEED TRY NOT TO LAUGH 😭"
        : "😂 YOU LOST 😂";
  }, 1000);
});