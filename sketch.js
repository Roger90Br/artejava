// Código p5.js para criar uma visualização artística com círculos em movimento

let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    circles.push(new Circle());
  }
}

function draw() {
  background(0);
  for (let circle of circles) {
    circle.move();
    circle.display();
  }
}

class Circle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 50);
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
    this.color = color(random(255), random(255), random(255));
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
    
    if (this.x < 0 || this.x > width) {
      this.speedX *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.speedY *= -1;
    }
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
