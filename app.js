const audioBtns = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");
let audio = "";

audioBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        audio = document.getElementById(btn.textContent.trimEnd());
        audio.play()
        display.textContent = `${btn.textContent.trimEnd()} was pressed.`
    })
});

document.addEventListener("keypress", function(event) {
    audio = document.getElementById(event.key.toUpperCase());
    audio.play()
    display.textContent = `${event.key.toUpperCase()} was pressed.`
  });


  console.log(audioBtns)