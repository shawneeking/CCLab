let startSketch = false;
let heart;
let counter;
let scene;
let color = 0;
function setup() {

    let cnv = createCanvas(1495, 715);
    cnv.parent("canvasContainer");
    background(255);
    heart = new Heart(610, 150);
    heart.display();
}
function draw() {
    if (startSketch == true) {
        background(255);
        heart.display();
        textFont('Comic Neue');
        textSize(40);

        if (counter < 5) {
            text("loading", 670, 310);
            fill(0);

            if (scene >= 0) {
                circle(810, 310, 5);
            }
            if (scene >= 20) {
                circle(825, 310, 5);
            }
            if (scene >= 40) {
                circle(840, 310, 5);
            }
            if (scene == 60) {
                scene = -20;
                counter += 1;
            }
        }
        scene += 1;
        if (scene > 100) {
            textAlign(CENTER);
            text("calculation complete", 725, 250, 70, 140);
        }
    }
}
function start() {
    startSketch = true;
    counter = 0;
    scene = 0;
}
class Heart {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
    }
    display() {

        push();
        fill(255, 0, 0);
        translate(this.x, this.y);
        beginShape();
        curveVertex(150, 600);
        curveVertex(150, 270);
        curveVertex(30, 150);
        curveVertex(75, 75);
        curveVertex(150, 100);
        curveVertex(150, 300);
        endShape();
        beginShape();
        curveVertex(150, 300);
        curveVertex(150, 100);
        curveVertex(225, 75);
        curveVertex(270, 150);
        curveVertex(150, 270);
        curveVertex(150, 600);
        endShape();
        pop();
    }

}

