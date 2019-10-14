let bg, flor1, flor2, flor3,flor4;

function preload() {
  bg = loadImage('pasto.jpg');
}

function setup() {

  cursor('regadera.png');
  createCanvas(600, 800);
  background(bg);

  flor1 = loadImage('Flores/flor1.png');
  flor2 = loadImage('Flores/flor2.png');
  flor3 = loadImage('Flores/flor3.png');
  flor4 = loadImage('Flores/flor4.png');

}

function draw() {}

function stamp(x, y) {

  push();
  imageMode (CENTER);
  image(flor, x, y, 100, 100);
  pop();
}

function mousePressed() {
  flores = [flor1, flor2, flor3, flor4];
  flor = random(flores);

  stamp(mouseX, mouseY);

}