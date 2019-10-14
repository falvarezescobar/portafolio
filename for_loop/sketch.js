function setup() {
  createCanvas(800, 800);

  noCursor();
  
}

function draw() {
  background(0);


  let numX = 10;
  let numY = 10;

  let m = 80;
  let spx = (width - 2 * m) / (numX - 1);
  let spy = (height - 2 * m) / (numY - 1);

  

  for (let y = 0; y < numY; y++) {
    for (let x = 0; x < numX; x++) {


      let d = dist(mouseX * 2, mouseY * 2, m + x * spx, m + y * spy);

      let r = map(d, 0, width, 0, PI);


      push();
      
      translate(m + x * spx, m + y * spy);
      rotate(r);

    

      fill(255);
      noStroke();
      triangle(spx, mouseX, 58, 20, 86, 75);
      pop();


    }
  }
}