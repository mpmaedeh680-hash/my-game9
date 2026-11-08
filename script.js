let randomNumber =
Math.floor(Math.random()*20) +1;
let attempts=0;
console.log(randomNumber);
document.getElementById("guessButton")
.addEventListener("click", checkGuess);

document.getElementById("guessInput")
.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

function checkGuess() {
    let guess = 
    Number(document.getElementById("guessInput").value);
    let result =
    document.getElementById("result");
    attempts++;
    if (guess === randomNumber) {
        result.textContent = "آفرین! درست حدس زدی🎉";
    celebrate();
    playSound(800);
    }
    else if (guess > randomNumber){
        result.textContent ="عدد من کوچک تره! 😂";
    playSound(300);
    }
    else {
        result.textContent = "عدد من بزرگ تره! 😂";
    playSound(400);
    }
    }
    function celebrate() {
        const colors = ["red", "blue", "yellow", "pink", "purple", "orange"];
    
        const celebration = document.getElementById("celebration");
    
        for (let i = 0; i < 30; i++) {
            const balloon = document.createElement("div");
    
            balloon.className = "balloon";
            balloon.style.left = Math.random() * 100 + "vw";
            balloon.style.backgroundColor =
                colors[Math.floor(Math.random() * colors.length)];
    
            celebration.appendChild(balloon);
        }
    }
    function playSound(frequency) {
        const audio = new AudioContext();
        const oscillator = audio.createOscillator();
        const volume = audio.createGain();
    
        oscillator.connect(volume);
        volume.connect(audio.destination);
    
        oscillator.frequency.value = frequency;
        oscillator.type = "sine";
    
        volume.gain.value = 0.2;
    
        oscillator.start();
        oscillator.stop(audio.currentTime + 0.2);
    }