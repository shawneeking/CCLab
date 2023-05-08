let startSketch = false;
let heart;
let counter;
let scene;
let confettis = [];
let numConfettis = 100;
let color = 0;
let myButton = document.getElementById('button1');
let capybara = document.getElementById('capybaraPic');
let loadingSound;
let okIPullUp;
let ding;
let angle = 0;
let strokeAge = 4;
let seeResult = false;
function preload() {
    okIPullUp = loadSound("sounds/OKIPULLUP.mp3");
    loadingSound = loadSound("sounds/GangnamStyleMemeSound.mp3");
    ding = loadSound("sounds/donesound.mp3");
}
function setup() {

    let cnv = createCanvas(1495, 715);
    cnv.parent("canvasContainer");
    background(0);
    heart = new Heart(610, 150);
    heart.display();
}
function draw() {
    if (startSketch == true) {
        background(0);
        textFont('Comic Neue');
        textSize(40);
        heart.display();
        if (counter < 5) {
            for (let i = 15; i < 1000; i += 5) {
                push();
                translate(760, 310);
                rotate(i + angle * 2);
                noFill();
                strokeWeight(strokeAge);
                stroke(255, 195, i - 200);
                ellipseMode(CENTER);
                ellipse(0, 0, i + 50, i + 10);
                pop();
                angle += 0.0001;
            }
            heart.display();
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
        strokeAge -= 0.01;
        scene += 1;
        if (scene > 100) {
            textAlign(CENTER);
            seeResult = true;
            text("calculation complete", 725, 250, 70, 140);
            document.getElementById('capybaraPic').classList.remove("rotate");
            document.getElementById("resultLink").style.visibility = "visible";
        }
        if (scene == 95) {
            ding.play();
        }
        if (scene == 100) {
            for (let i = 0; i < numConfettis; i++) {
                confettis.push(new Confetti(760, 310));
            }
        }
        for (let i = 0; i < confettis.length; i++) {
            confettis[i].display();
            confettis[i].move();
        }
    }


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
class Confetti {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.xSpeed = random(-10, 10);
        this.ySpeed = random(-6, -3);
        this.size = random(2, 10);
    }
    move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.ySpeed += 0.1;
        this.xSpeed = this.xSpeed * 0.99;
    }
    display() {
        push();
        translate(this.x, this.y);
        noStroke();
        fill(255, 105, 180);
        circle(0, 0, this.size);
        pop();
    }
}
function hideButton() {
    document.getElementById('button1').style.visibility = 'hidden';
    document.getElementById('myselection').style.visibility = 'hidden';
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
function start() {
    startSketch = true;
    loadingSound.play();
    counter = 0;
    scene = 0;
   // document.getElementsByClassName("myDiv2").style.visibility = "visible";
    
}