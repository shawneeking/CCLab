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
 
    a = document.getElementById("lowpercenta").classList.contains("lowPercent");
    b = document.getElementById("lowpercentb").classList.contains("lowPercent");
    c = document.getElementById("lowpercentc").classList.contains("lowPercent");
    d = document.getElementById("lowpercentd").classList.contains("lowPercent");
    e = document.getElementById("lowpercente").classList.contains("lowPercent");
    f = document.getElementById("midpercentf").classList.contains("midPercent");
    g = document.getElementById("midpercentg").classList.contains("midPercent");
    h = document.getElementById("midpercenth").classList.contains("midPercent");
    j = document.getElementById("midpercentj").classList.contains("midPercent");
    k = document.getElementById("midpercentk").classList.contains("midPercent");
    l = document.getElementById("midpercentl").classList.contains("midPercent");
    m = document.getElementById("midpercentm").classList.contains("midPercent");
    n = document.getElementById("midpercentn").classList.contains("midPercent");
    o = document.getElementById("midpercento").classList.contains("midPercent");
    p = document.getElementById("highpercentp").classList.contains("highPercent");
    q = document.getElementById("highpercentq").classList.contains("highPercent");
    r = document.getElementById("highpercentr").classList.contains("highPercent");
    x = document.getElementById("highpercentx").classList.contains("highPercent");
    y = document.getElementById("highpercenty").classList.contains("highPercent");
    z = document.getElementById("highpercentz").classList.contains("highPercent");
    if(a == true){
        lowPercent.play();
    }
    if(b == true){
        lowPercent.play();
    }
    if(c == true){
        lowPercent.play();
    }
    if(d == true){
        lowPercent.play();
    }
    if(e == true){
        lowPercent.play();
    }
    if(f == true){
        midPercent.play();
    }
    if(g == true){
        midPercent.play();
    }
    if(h == true){
        midPercent.play();
    }
    if(j == true){
        midPercent.play();
    }
    if(k == true){
        midPercent.play();
    }
    if(l == true){
        midPercent.play();
    }
    if(m == true){
        midPercent.play();
    }
    if(n == true){
        midPercent.play();
    }
    if(o == true){
        midPercent.play();
    }
    if(p == true){
        highPercent.play();
    }
    if(q == true){
        highPercent.play();
    }
    if(r == true){
        highPercent.play();
    }
    if(x == true){
        highPercent.play();
    }
    if(y == true){
        highPercent.play();
    }
    if(z == true){
        highPercent.play();
    }
}