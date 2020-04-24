const refs = {
    start: document.querySelector('button[data-action="start-timer"]'),
    stop: document.querySelector('button[data-action="stop-timer"]'),
    time: document.querySelector(".timerP")
  }


const timer = {
    isActive: false,
    start(){
        if(this.isActive){
            return
        }
        if(!this.isActive){
            this.isActive = true;
            const startTime = Date.now();
            this.timerId = setInterval(() =>{
                const currentTime=Date.now();
                const deltaTime = currentTime - startTime;
                const date = new Date(deltaTime);
                const hours = String(date.getUTCHours()).padStart(2,'0');
                const minutes = String(date.getUTCMinutes()).padStart(2,'0');
                const seconds = String(date.getUTCSeconds()).padStart(2,'0');
                console.log(`${hours}:${minutes}:${seconds}`);
                refs.time.textContent = `${hours}:${minutes}:${seconds}`;
        },1000)
    }
    },
    stop(){
        clearInterval(this.timerId);
        this.isActive = false;
        refs.time.textContent = `00:00:00`;
    }
}

refs.start.addEventListener('click',timer.start.bind(timer));
refs.stop.addEventListener('click',timer.stop.bind(timer));




