const moment = require("moment");
let interval;
let elementCountPomodoros = document.querySelector(".count-pomodoros");
let count = 0;
module.exports = {
    play: function ( elem ) {
        //transforma o tempo (00:25:00) em milisegundos
        let time = "00:"+elem.textContent;
        time = moment.duration(time);
        let seconds = time.asSeconds();
        
        this.notification("Timer Pomodoro", 'Pomodoro iniciado!');
            
        clearInterval(interval);
        interval = setInterval( () => {
            seconds--;
            elem.textContent = this.parseSecondesToHours(seconds);
            if (elem.textContent == "00:00") {
                clearInterval(interval);
                count++;
                this.countPomodoro( elementCountPomodoros );
            }
        }, 1000);
        
    },
    
    parseSecondesToHours: function ( seconds ) {
        return moment().startOf('day').seconds(seconds).format("mm:ss");
    },
    
    stop: function ( elem ) {
        clearInterval(interval);
        elem.textContent = "25:00";
        this.notification("Timer Pomodoro", 'Pomodoro parado!');
    },
    
    countPomodoro: function ( elem ) {
        elem.textContent = count;
        this.notification("Timer Pomodoro", 'pomodoro terminado!');
    },
    
    notification: function ( title, body ) {
        new Notification(title,{
            body: body,
            silent: true,
            hasReply: false,
            icon: '../img/icon.png'
        });
    },

}
