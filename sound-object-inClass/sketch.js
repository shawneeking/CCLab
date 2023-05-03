// sounds from:
// https://freesound.org/people/GowlerMusic/sounds/266566/
// https://freesound.org/people/cfork/sounds/8000/
// https://freesound.org/people/ccolbert70Eagles23/sounds/423526/


let bodies = [];
let creatures = [];
let numCreatures = 5;
let gong;
let karate;
let plop;
function preload() {
    for (let i = 0; i < 3; i++) {
        bodies.push(loadImage("bodies/body_" + i + ".png"))
    }
    karate = loadSound("sounds/423526__ccolbert70eagles23__karate-chop.m4a")
    gong = loadSound("sounds/266566__gowlermusic__gong-hit.wav")
}

function setup() {
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasContainer");
    for (let i = 0; i < numCreatures; i++) {
        let newCreature = new Creature(width / 2, height / 2);
        creatures.push(newCreature);
    }

}

function draw() {
    background(120, 40, 240);
    for (let i = 0; i < creatures.length; i++) {
        creatures[i].display();
        creatures[i].update();
    }

}


class Creature {
    constructor(x_, y_) {
        this.x = x_;
        this.y = y_;
        this.bodyIndex = floor(random(0, 3));
        this.xSpeed = random(-2, 2);
        this.ySpeed = random(-2, 2);
        this.radius = 25;

    }
    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if (this.x < this.radius || this.x > width - this.radius) {
            this.xSpeed *= -1
            // gong.play();
        }
        if (this.y < this.radius || this.y > height - this.radius) {
            this.ySpeed *= -1
        }
    }
    display() {
        push();
        translate(this.x, this.y)

        if (this.bodyIndex == 0) {
            fill(40, 23, 230);
        } else if (this.bodyIndex == 1) {
            fill(135, 7, 30);
        } else if (this.bodyIndex == 2) {
            fill(224, 121, 2);
        }

        circle(0, 0, this.radius * 2);
        push();
        scale(0.1);
        let imageWidth = bodies[0].width;
        let imageHeight = bodies[0].height;
        image(bodies[this.bodyIndex], -imageWidth / 2, -imageHeight / 2);
        pop();



        pop();


    }
}

