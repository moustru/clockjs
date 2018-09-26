const angleMid = 90;
var s;

class Arrow {
    constructor(src, angle) {
        this.src = document.querySelector(src);
        this.angle = angle;
        this.getTime = null;
        this.begin = null;
    }

    move() {
        this.src.style.transform = `rotate(${this.begin}deg)`;
        this.begin += this.angle;
    }
}

var hour = new Arrow('.arrow-hour', 0.5 / 60 / 100);
var min = new Arrow('.arrow-min', 0.001);
var sec = new Arrow('.arrow-sec', 0.06);

change = () => {
    var nowDate = new Date();
    sec.getTime = nowDate.getSeconds();
    min.getTime = nowDate.getMinutes();
    hour.getTime = nowDate.getHours();
    
    return {
        secBegin: (sec.angle * 100 * sec.getTime) - angleMid,
        minBegin: ((sec.angle * 100 * min.getTime) - angleMid) + (min.angle * sec.getTime),
        hourBegin: ((sec.angle * 500 * hour.getTime) - angleMid) + ((hour.angle) * sec.getTime)
    }
};

sec.begin = change().secBegin;
min.begin = change().minBegin;
hour.begin = change().hourBegin;

start = () => {
    hour.move();
    min.move();
    sec.move();
}

window.onload = function() {
    s = setInterval(start, 10);
}