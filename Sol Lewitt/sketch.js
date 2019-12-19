//basado en https://editor.p5js.org/hspencer/sketches/4s2-3JkDe
let posX = [];
let posY = [];
let rot = [];

let m1 = 1000;
let m2 = 100
let m3 = 50
eme = [m1, m2, m3];



function setup() {
  createCanvas(800, 500);
  strokeWeight(3);
  stroke(100);
  m = random(eme);

  for (let i = 0; i < 500; i++) {
    posX.push(random(m, width - m));
    posY.push(random(m, height - m));
    rot.push(random(TWO_PI));
  }
}

function draw() {
  background(250);

  for (let i = 0; i < posX.length; i++) {

    push();

    translate(posX[i], posY[i]);

    rotate(rot[i]);
    line(-20, 0, 30, 0);

    pop();

  
  }
}