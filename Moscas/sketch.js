function setup() {
  createCanvas(600, 600);
  noCursor();
}

function draw() {
  background(220);
  
  var moscas = { 
  locationX : random(width),
  locationY : random(height),
  size : (5)
}
  fill(0)
  
  ellipse(moscas.locationX ,moscas.locationY, moscas.size, moscas.size);
}