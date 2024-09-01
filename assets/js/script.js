document.addEventListener("DOMContentLoaded", function() {
    const element = document.querySelector('.rolling-name');
    element.textContent = "";
    const initialText = "Rohit Bobli";
    const words = ["Student", "Code", "Math"];
    let text = initialText;
    let index = 0;
    let wordIndex = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 500); // Adjust typing speed here
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (index > 0) {
            element.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(erase, 100); // Adjust erasing speed here
        } else {
            if (text === initialText) {
                text = words[wordIndex];
                wordIndex = (wordIndex + 1) % words.length;
            } else {
                text = initialText;
            }
            setTimeout(type, 500);
        }
    }

    type();
});


//stars
"use strict";

let c, ctx,
    WIDTH, HEIGHT,
    startX, startY,
    keydown = false;

const STARS = [];

const {PI: π} = Math;

class Star {
    constructor() {
        this.x = UTILITY.random(-WIDTH * 2, WIDTH * 3);
        this.y = UTILITY.random(-HEIGHT * 2, HEIGHT * 3);
        this.z = UTILITY.random(20);

        this.vx = UTILITY.random(3, 5) * (1 - UTILITY.normalize(this.z, 0, 20));
        this.vy = UTILITY.random(3, 5) * (1 - UTILITY.normalize(this.z, 0, 20));

        this.r = UTILITY.random(1, 2) * (1 - UTILITY.normalize(this.z, 0, 20));
        this.alpha = UTILITY.normalize(this.z, 0, 20) / 5 + .8 + UTILITY.random(-.05, .05);
    }
    update(vx, vy) {
        this.x += this.vx * vx;
        this.y += this.vy * vy;

        this.draw();
    }
    draw() {
        ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, π * 2, true);
        ctx.closePath();

        ctx.fillStyle = `rgb(255, 255, 255, ${this.alpha})`;
        ctx.fill();
    }
}

const UTILITY = {
    random(max = 1, min = 0) {
        return max > min? Math.random() * (max - min) + min: Math.random() * (min - max) + max;
    },
    normalize(value, min, max) {
        return (value - min) / (max - min);
    }
};

const MAIN = {
    ASSIGN() {
        c = document.querySelector("canvas");
        ctx = c.getContext("2d");

        [WIDTH, HEIGHT] = [window.innerWidth, window.innerHeight];
    },
    SET_CANVAS_SIZE() {
        c.width = WIDTH;
        c.style.width = WIDTH;

        c.height = HEIGHT;
        c.style.height = HEIGHT;
    },
    INITIALIZE() {
        STARS.length = 0;
        for (let i = 0; i < 5000; i++) {
            STARS.push(new Star());
            STARS[i].draw();
        }
    }
};

const EVENTS = {
    LOAD() {
        MAIN.ASSIGN();
        MAIN.SET_CANVAS_SIZE();
        MAIN.INITIALIZE();
    },
    RESIZE() {
        MAIN.ASSIGN();
        MAIN.SET_CANVAS_SIZE();
        MAIN.INITIALIZE();
    },
    TOUCHSTART(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    },
    TOUCHMOVE(e) {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);

        const distX = (e.touches[0].clientX - startX) / 10;
        const distY = (e.touches[0].clientY - startY) / 10;

        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;

        for (let i of STARS)
            i.update(distX, distY);
    },
    MOUSEDOWN(e) {
        startX = e.clientX;
        startY = e.clientY;

        keydown = true;
    },
    MOUSEMOVE(e) {
        if (keydown) {
            ctx.clearRect(0, 0, WIDTH, HEIGHT);

            const distX = (e.clientX - startX) / 10;
            const distY = (e.clientY - startY) / 10;

            startX = e.clientX;
            startY = e.clientY;

            for (let i of STARS)
                i.update(distX, distY);
        }
    },
    MOUSEUP() {
        keydown = false;
    }
};

window.addEventListener("load", EVENTS.LOAD);

window.addEventListener("resize", EVENTS.RESIZE);

window.addEventListener("touchstart", EVENTS.TOUCHSTART);

window.addEventListener("touchmove", EVENTS.TOUCHMOVE);

window.addEventListener("mousedown", EVENTS.MOUSEDOWN);

window.addEventListener("mousemove", EVENTS.MOUSEMOVE);

window.addEventListener("mouseup", EVENTS.MOUSEUP);