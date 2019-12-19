var randomColor;

function setup() {
  createCanvas(640, 480);
  blendMode(SOFT_LIGHT);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  }
  randomColor = color(random(255), random(255), random(255));
  strokeWeight(10);
  line(mouseX, mouseY, 320, 240);
  stroke(randomColor);
}