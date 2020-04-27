const startButton = document.querySelector('button[data-action="start"]');
const stopButton = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');


const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

const timer = {
    isActive: false,
    start(){
        if(this.isActive) return
        
        if(!this.isActive){
            this.isActive = true;
            this.timerId = setInterval(() =>{
            body.style.backgroundColor=`${colors[randomIntegerFromInterval(0,5)]}`; 
            console.log( `"${colors[randomIntegerFromInterval(0,5)]}"` )
        },1000)}},
    
    stop() {
        clearInterval(this.timerId); 
        this.isActive = false;
    }
};


startButton.addEventListener('click',timer.start.bind(timer));
stopButton.addEventListener('click',timer.stop.bind(timer));





