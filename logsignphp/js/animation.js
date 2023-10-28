let stars = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();

    for (let i = 0; i < 100; i++) {
        stars.push(new Star());
    }
}

function draw() {
    background(0);
    fill(250);

    for (let star of stars) {
        star.update();
        star.display();
    }
}

class Star {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.speed = random(1, 3);
    }

    update() {
        this.y += this.speed;
        if (this.y > height) {
            this.y = random(-20, -1);
            this.x = random(width);
        }
    }

    display() {    
        ellipse(this.x, this.y, 2, 2);
    }
}