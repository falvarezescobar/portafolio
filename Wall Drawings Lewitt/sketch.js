// obra: https://www.centrepompidou-metz.fr/sites/default/files/imagecache/img-zoom/web-wd414-pompidou-metz_sol-lewitt_05032012_191_0.jpg
let rows = 4;
let columns = 4;
let stepX;
let stepY;

function setup() {
  
  createCanvas(500, 500);
  
  background(255);
  
  rectMode(CORNER);
  
  noStroke();
  
  stepX = width/columns;
  stepY = height/rows;
  

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      
      randomColor = color(random(200));
      
      fill(randomColor);
      noStroke();
      rect(i * stepX, j * stepY, stepX, stepY);
    }
  }
  
}  