const moment = require("moment");
let interval;
module.exports = {
    play: function ( elem ) {
        //trasforma o tempo (00:25:00) em milisegundos
        let time = "00:"+elem.textContent;
        time = moment.duration(time);
        let seconds = time.asSeconds();
        clearInterval(interval);
        interval = setInterval( () => {
            seconds--;
            elem.textContent = this.parseSecondesToHours(seconds);
        }, 1000);
    },
    parseSecondesToHours: function ( seconds ) {
        return moment().startOf('day').seconds(seconds).format("mm:ss");
    },
    stop: function ( elem ) {
        clearInterval(interval);
        elem.textContent = "25:00";
    }
}
