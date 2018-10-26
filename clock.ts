const angleMid: number = 90;
var s: any;

class Arrow {
    src: HTMLElement;
    angle: number;
    getTime: any;
    begin: any;

    constructor(src: any, angle: number) {
        this.src = (<HTMLElement>document.querySelector(src));
        this.angle = angle;
        this.getTime = null;
        this.begin = null;
    }

    move(): void {
        this.src.style.transform = ` rotate(${this.begin}deg) `;
        this.begin += this.angle;
    }
}

var hour = new Arrow('.arrow-hour', 0.5 / 60 / 100);
var min = new Arrow('.arrow-min', 0.001);
var sec = new Arrow('.arrow-sec', 0.06);

let change = (): any => {
    var nowDate: any = new Date();
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

let start = (): void => {
    hour.move();
    min.move();
    sec.move();
}

window.onload = (): void => {
    s = setInterval(start, 10);
}