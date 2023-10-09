const play = () => {
    let allButtons = document.querySelectorAll('.button');
    let winner = document.getElementById('winner');
    let time = 3;

    const startPlaying = () => {
        allButtons.forEach(user => {
            user.addEventListener("click", () => {
            prepareToPlay(user);
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
    prepareToPlay = (user) => {
        allButtons.forEach(val => val.classList.remove("pink"));
        time = 3;
        winner.textContent = time;

        user.classList.add("pink");

    }    

    startPlaying()

}
play()