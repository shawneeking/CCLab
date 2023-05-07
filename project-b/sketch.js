let startSketch = false;
let heart;
let counter;
let scene;
let color = 0;
let myButton = document.getElementById('button1');
let capybara = document.getElementById('capybaraPic');
let loadingSound;
let highPercent;
let midPercent;
let lowPercent;
let value;
let a;
let b;
let c;
let d;
let e;
let f;
let g;
let h;
let j;
let k;
let l;
let m;
let o;
let p;
let q;
let r;
let x;
let y;
let z;
function preload() {
    highPercent = loadSound("sounds/OKIPULLUP.mp3");
    loadingSound = loadSound("sounds/GangnamStyleMemeSound.mp3");
    midPercent = loadSound("sounds/CapybaraSong.mp3");
    lowPercent = loadSound("sounds/SpongebobFailSoundEffect.mp3");
}
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
            const list = document.getElementById('capybaraPic').classList;
            list.remove("rotate");
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
    const list = document.getElementById('capybaraPic').classList;
    list.add("rotate");
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
function playAudio(){
    p = document.getElementById("highpercentp").classList.contains("highPercent");
    q = document.getElementById("highpercentq").classList.contains("highPercent");
    r = document.getElementById("highpercentr").classList.contains("highPercent");
    x = document.getElementById("highpercentx").classList.contains("highPercent");
    y = document.getElementById("highpercenty").classList.contains("highPercent");
    z = document.getElementById("highpercentz").classList.contains("highPercent");
    if(p == true || q == true || r == true || x == true || y == true || z == true){
        highPercent.play();
    }
}