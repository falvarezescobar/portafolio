//basado en código https://editor.p5js.org/natureofcode/sketches/Bk9KyuDul
let angle = 0;
  let r = 10;

let spin = 0.1;
let grow = spin * 5;

function setup() {
  createCanvas(400, 400);
  background(0);
  blendMode(LIGHTEST);
}

function draw() {
  angle += spin;
  r = r + grow;
  let x = cos(angle)*r;
  let y = sin(angle)*r;
  translate(200, 200);
  randomColor = color(random(255), random(255), random(255));

  fill(randomColor)
  noStroke();
  ellipse(x, y, 30, 30);
  





}