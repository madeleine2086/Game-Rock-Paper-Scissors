const play = () => {
    let allButtons = document.querySelectorAll('.button');
    let winner = document.getElementById('winner');
    let playerResult = document.getElementById('player-result');
    let computerResult = document.getElementById('computer-result');
    let computerChoice = "";
    let userChoice = "";
    let time = 3;

    const startPlaying = () => {
        allButtons.forEach(user => {
            user.addEventListener("click", () => {
            prepareToPlay(user);
            let timeInterval = setInterval(() => {
                if (time === 0) {
                    clearInterval(timeInterval);
                    let computer = Math.floor(Math.random() * 3);
                    playerAndComputerDisplay(user.id, allButtons[computer].id)
                } else {
                    winner.textContent = time;
                    time--;
                }
            }, 700)
            })
        })
    }
    prepareToPlay = (user) => {
        allButtons.forEach(val => val.classList.remove("red"));
        time = 3;
        winner.textContent = time;

        user.classList.add("red");

    }    
    startPlaying()

}
play()