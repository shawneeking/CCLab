let startSketch = false;
let heart;
let counter;
let scene;
let color = 0;
let myButton = document.getElementById('button1');
let capybara = document.getElementById('capybaraPic');
let loadingSound;
let okIPullUp;
function preload() {
    okIPullUp = loadSound("sounds/OKIPULLUP.mp3");
    loadingSound = loadSound("sounds/GangnamStyleMemeSound.mp3");
}
function setup() {

    let cnv = createCanvas(1495, 715);
    cnv.parent("canvasContainer");
    background(255);
    heart = new Heart(610, 150);
    spiral = new Spiral(width / 2, height / 2);
    heart.display();
}
function draw() {

    if (startSketch == true) {

        spiral.display();
        spiral.update();
        heart.display();
       
        textFont('Comic Neue');
        textSize(40);

        if (counter < 5) {
            textAlign(LEFT);
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
            document.getElementById("resultLink").style.visibility = "visible";
            document.getElementsByClassName("myDiv2").style.visibility = "visible";
            document.getElementById('capybaraPic').classList.remove("rotate");
            for (let i = 1; i < 21; i++) {
                document.getElementById('show' + i).classList.remove('rotate2');
            }
        }
    }
}
function start() {
    startSketch = true;
    loadingSound.play();
    counter = 0;
    scene = 0;
 
}
function rotateImages() {
    document.getElementById('capybaraPic').classList.add("rotate");
    for (let i = 1; i < 21; i++) {
        document.getElementById('show' + i).classList.add('rotate2');
    }

}
function playAudio() {
    okIPullUp.play();
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
class Spiral {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.age = 0;
        this.angle = 0;
    }
    display() {

        for (let i = 15; i < 500; i += 5) {
            push();
            translate(this.x, this.y);
            rotate(i + 2 * this.angle);
            stroke(255, 195, i - 200);
            ellipse(0, 0, i + 15, i);
            pop();
        }

    }
    update() {
        this.angle += 0.0001
    }
}
function hideButton(){
    document.getElementById('button1').style.visibility = 'hidden';
}