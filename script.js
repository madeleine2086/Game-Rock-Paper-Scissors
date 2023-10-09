const play = () => {
    let allButtons = document.querySelectorAll('.button');
    let winner = document.getElementById('winner');
    let time = 3;

    const startPlaying = () => {
        allButtons.forEach(user => {
            user.addEventListener("click", () => {
            let timeInterval = setInterval(() => {
                if (time === 0) {
                    clearInterval(timeInterval);
                } else {
                    winner.textContent = time;
                    time--;
                }
            }, 700)
            })
        })
    }
    startPlaying()
}
play()