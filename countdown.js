function countdown(seconds) {
    let timer = setInterval(() => {
        console.log(seconds);
        seconds--;

        if (seconds < 0) {
            clearInterval(timer);
            console.log("Time's up! 🚀");
        }
    }, 1000);
}

countdown(10);
