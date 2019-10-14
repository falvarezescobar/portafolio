
let foto;

function preload() {
  foto = loadImage("perro.jpeg");
}


function setup() {
  createCanvas(foto.width, foto.height);
  rectMode(CENTER);
  noLoop();
}

let sp = 10; // spacer o "espaciador"

function draw() {
  background(255);
  noStroke();
  for (let y = 0; y < height; y += sp) {
    for (let x = 0; x < width; x += sp) {
      let col = foto.get(x, y);
      miLindoTrazo(x, y, col);
    }
  }
}

function Trazo(x, y, col){
 let b = brightness(col);
  let r = red(col);
  let g = green(col);
  let bl = blue(col);
  let n =  round(map(b, 0, 255, 40, 0));
  for(let i = 0; i < n; i++){
   let nx = random(-sp, sp);
    let ny = random(-sp, sp);
    
    let c = color(r + 50,g - 50,bl + 50);
    fill(c);
  ellipse(x + nx, y + ny, 2, 35);
  }
  
}