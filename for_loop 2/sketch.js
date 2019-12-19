
var randomColor;
function setup() {
  createCanvas(800, 800);
  noLoop();
  noCursor();
}

function draw() {
  background(155);


  let numX = 30;
  let numY = 30;

  let m = 80;
  let spx = (width - 2 * m) / (numX - 1);
  let spy = (height - 2 * m) / (numY - 1);

  

  for (let y = 0; y < numY; y++) {
    for (let x = 0; x < numX; x++) {


      let d = dist(mouseX * 2, mouseY * 2, m + x * spx, m + y * spy);

      let r = map(d, 0, width, 0, PI);


      push();
      loop();
      translate(m + x * spx, m + y * spy);
      rotate(r);

     randomColor = color(random(255), random(255), random(255));

      fill(randomColor)
      noStroke();
      rect(0, 0, 80, 10);
      pop();


    }
  }
}