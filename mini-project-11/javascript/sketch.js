let stars = [];
let numStars = 50;
let scene = 0;
let origin;
let particles = [];
let numParticles = 15;
let textAge = 0;
let textAge2 = 0;
let yes = false;
let bgstars = [];
let blackhole;
let BHX;
let BHY;
let BHS;
let bgcolor = 0;
let textColor = 0;
let bgstar = true;

function setup() {
  let cnv = createCanvas(1495, 715);
  cnv.parent("canvasContainer")
  for (let i = 0; i < 500; i++) {
    bgstars[i] = new bgStar(random(width), random(height));
  }
  BHX = width / (random(1, 4));
  BHY = height / (random(1, 4));
  BHS = 80;
  blackhole = new Star(BHX - BHS / 2, BHY - BHS / 2, BHS);
  origin = new Origin(width / 2, height / 2);
  for (let i = 0; i < numStars; i++) {
    stars.push(new Star(random(0, width), random(0, height), random(20, 50)));
  }
}

function draw() {
  background(bgcolor);
  if (scene == 0) {
    origin.display();
    origin.clicked();
  }
  if (scene == 1) {
    origin.beVisible();
    if (yes == true) {
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(width / 2, height / 2));
      }
    }
    for (let i = 0; i < particles.length; i++) {
      particles[i].display();
      particles[i].explosion();
      particles[i].checkIfOnCanvas();
    }
    for (let i = particles.length - 1; i >= 0; i--) {
      if (particles[i].onCanvas == false) {
        particles.splice(i, 1);
      }
    }
  }
  if (scene == 2) {
    yes = !yes;
    bgcolor += 5;
    background(bgcolor);
    textSize(25);
    textAlign(CENTER);
    fill(0);
    push();
    translate(width / 2, height / 2);
    text("Fast Forward a Couple Billion Years...", 0, 0);
    pop();
    textAge += 0.1;
    if (textAge > 8) {
      bgcolor -= 10;
    }
    if (textAge > 18) {
      scene = 3;
    }
  }
  if (scene == 3) {
    for (let i = 0; i < bgstars.length; i++) {
      bgstars[i].display();
    }
  }

  if (scene == 3) {

    for (let i = 0; i < stars.length; i++) {
      stars[i].display();
      stars[i].update();
      stars[i].checkCollision(blackhole);
    }
    for (let i = stars.length - 1; i >= 0; i--) {
      if (stars[i].onCanvas == false) {
        stars.splice(i, 1);
      }
    }
    if (bgstar == true) {
      if (stars.length < numStars) {
        for (let i = 0; i < 1; i++) {
          stars.push(new Star(random(0, width), random(0, height), random(20, 50)));
        }
      }
    }
    blackhole.blackhole();
    blackhole.clicked(blackhole);
  }
  if (scene == 4) {
    push();
    translate(width / 2, height / 2);
    textAlign(CENTER);
    noStroke();
    textSize(30);
    fill(textColor);
    text("The Secret of the Universe is...", 0, 0);
    pop();
    textAge2 += 0.1;
    if (textAge2 > 8) {
      textColor += 3;
    }
    if (textAge2 > 18) {
      textColor -= 8;
    }

    if (textColor == -150) {
      scene = 5;
    }
  }
  if (scene == 5) {
    blackhole.update(blackhole);
    textSize(15);
    noStroke();
    origin.update();
    textAge = 0;
    textAge2 = 0;
    textColor = 0;
    bgcolor = 0;
    bgstar = true;
    for (let i = 0; i < numStars; i++) {
      stars.push(new Star(random(0, width), random(0, height), random(20, 50)));
    }
    scene = 0;
  }
}
class Star {
  constructor(startX, startY, startSize) {
    this.x = startX;
    this.y = startY;
    this.xSpeed = random(-1, 1);
    this.ySpeed = random(-0.2, 0.2);
    this.size = startSize;
    this.red = color(217, 35, 35);
    this.yellow = color(255, 248, 115);
    this.blue = color(94, 231, 255);
    this.angle = TWO_PI;
    this.clickedOn = false;
    this.onCanvas = true;
  }
  display() {
    push();
    translate(this.x, this.y);
    if (this.size < 30) {
      stroke(148, 250, 255);
      strokeWeight(2);
      fill(this.blue);
      this.angle += 0.03;
    } else if (this.size < 40) {
      stroke(255, 156, 56);
      strokeWeight(3);
      fill(this.yellow);
      this.angle += 0.02;
    } else {
      stroke(255, 25, 0);
      strokeWeight(4);
      fill(this.red);
      this.angle += 0.01;
    }
    let sinValue = sin(this.angle);
    let oscillate = this.size + sinValue * 5;
    circle(0, 0, oscillate);
    pop();
  }
  blackhole() {

    textAlign(CENTER);
    textSize(30);
    stroke(245, 112, 2);
    strokeWeight(2);
    fill(0);
    // text('Click the Special Object to Discover the Secret',width/2,60)
    strokeWeight(5);
    this.angle += 0.04;
    let sinValue = sin(this.angle);
    let oscillate = this.size + sinValue * 10;
    circle(this.x, this.y, oscillate);

  }
  checkCollision(other) {
    let suck = dist(this.x, this.y, other.x, other.y);
    if (suck < this.size + other.size) {
      if (other.x - this.x < 0 || other.y - this.y < 0) {
        this.x += (other.x - this.x) / 180;
        this.y += (other.y - this.y) / 180;

      }
      if (other.x - this.x > 0 || other.y - this.y < 0) {
        this.x += (other.x - this.x) / 90;
        this.y += (other.y - this.y) / 90;

      }
      if (other.x - this.x < 0 || other.y - this.y > 0) {
        this.x += (other.x - this.x) / 90;
        this.y += (other.y - this.y) / 90;

      }
      if (other.x - this.x > 0 || other.y - this.y > 0) {
        this.x += (other.x - this.x) / 90;
        this.y += (other.y - this.y) / 90;

      }
    }
    if (suck <= other.size - this.size + 10) {
      other.size += 1;
      this.onCanvas = false;
    }
  }
  clicked(other) {
    let blackHoleClick = dist(mouseX, mouseY, other.x, other.y);
    if (blackHoleClick < other.size) {
      if (mouseIsPressed) {
        this.clickedOn = true;
      }
    }
    if (this.clickedOn == true) {
      bgstar = false;
      other.size += 10;
    }
    if (other.size > 3000) {
      scene = 4;
    }
  }

  update(other) {
    this.x += this.xSpeed;
    if (this.x - this.size / 2 > width || this.x + this.size / 2 < 0) {
      this.onCanvas = false;
    }
    this.y += this.ySpeed;
    if (this.y - this.size / 2 > height || this.y + this.size / 2 < 0) {
      this.onCanvas = false;
    }
    if (scene == 5) {
      this.clickedOn = false;
      other.size = 80;
      other.x = width / random(1, 4) - other.size / 2;
      other.y = height / random(1, 4) - other.size / 2;
    }
  }
}
class Particle {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;

    this.xSpeed = random(-10, 10);
    this.ySpeed = random(-5, 5);
    this.size = random(5, 10);
    this.color = color(random(100, 255), random(0, 100), random(0, 60));
    this.onCanvas = true;
    this.age = 0;
  }
  checkIfOnCanvas() {
    if (this.y > height || this.y < 0) {
      this.onCanvas = false;
    }

    if (this.x > width || this.x < 0) {
      this.onCanvas = false;
    }
  }

  explosion() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.age += 0.1;
    if (this.age > 10) {
      this.onCanvas = false;
      yes = false;
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(this.color);
    circle(0, 0, this.size);
    pop();
  }
}

class Origin {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.size = 10;
    this.color = color(255);
    this.age = 0;
    this.clickedOn = false;
  }
  display() {
    push();
    translate(this.x, this.y);
    fill(this.color);
    noStroke();
    circle(0, 0, this.size);
    textSize(15);
    textAlign(CENTER);
    // text("Click Here", 0, -10);
    pop();
  }
  update() {
    if (scene == 5) {
      this.clickedOn = !this.clickedOn;
    }
    if (this.clickedOn == false) {
      this.age = 0;
      yes = !yes;
    }
  }
  beVisible() {
    if (this.clickedOn == true) {
      this.age += 0.1;
      if (this.age > 25) {
        scene = 2;
      }
    }
  }
  clicked() {
    let originClick = dist(mouseX, mouseY, this.x, this.y);
    if (originClick < this.size) {
      if (mouseIsPressed) {
        this.clickedOn = true;
      }
    }
    if (this.clickedOn == true) {
      yes = true;
      scene = 1;
    }
  }
}

class bgStar {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.size = random(0.25, 2.5);
    this.angle = random(TWO_PI);
  }
  display() {
    this.angle += 0.01;
    let sinValue = sin(this.angle);
    let oscillate = this.size + sinValue * 3;
    noStroke();
    fill(255);
    circle(this.x, this.y, oscillate);
  }
}
