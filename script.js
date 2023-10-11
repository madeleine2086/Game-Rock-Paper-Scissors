const play = () => {
    let allButtons = document.querySelectorAll('.button');
    let winner = document.getElementById('winner');
    let playerResult = document.getElementById('player-result');
    let computerResult = document.getElementById('computer-result');
    let resultSection = document.getElementById('result');
    let userScoreDisplay = document.getElementById('player-score');
    let computerScoreDisplay = document.getElementById('computer-score');
    let userScore = 0;
    let computerScore = 0;
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
                    checkWinner(user.id, allButtons[computer].id);
                    resultSection.classList.add('result');
                } else {
                    winner.textContent = time;
                    time--;
                }
            }, 700)
            })
        })
    }
    playerAndComputerDisplay = (user, computer) => {
        playerResult.classList.remove('fa-hand-' + userChoice);
        computerResult.classList.remove('fa-hand-' + computerChoice);
        playerResult.classList.add('fa-hand-' + user);
        computerResult.classList.add('fa-hand-' + computer);
        userChoice = user;
        computerChoice = computer;
    }


    prepareToPlay = (user) => {
        allButtons.forEach(val => val.classList.remove('red'));
        time = 3;
        winner.textContent = time;

        user.classList.add('red');
        resultSection.classList.remove('result');
    }
    
    checkWinner = (user, computer) => {

    }


    startPlaying()

}
play()