 let cant = 7;
let tam = 30;
  
  let OpArt

function preload(){
OpArt = loadImage ("assets/circulo.jpg"); 
}

function setup() {
 createCanvas(800, 400); 
 
}


function draw() {
background(198, 32, 25); 
image(OpArt, 0, 0, width/2, height); 

 stroke(255);
  noFill();
}
  for (let x = 0; x < cant; x++) {
    for (let y = 0; y < cant; y++) {
      let posX = x * (tam + 30) + 420;
      let posY = y * (tam + 28) + 27;
      if ((x + y) % 2 == 0) {
        stroke(120);
        strokeWeight(2);
      } else {
        stroke(176);
        strokeWeight(1);
      }
      let tono = calcularColor(mouseX, mouseY, x * tam, y * tam);
      dibujarElipse(posX, posY, tono);
    }

}




function mousePressed() {
  if (mouseX > width / 2) {
    cant--;
  }
}

function keyPressed() {
  if (mouseX > width / 2) {
    if (key == 'r' || key == 'R') {
      cant = 7;
      tam = 30;
    }
  }
}

function calcularColor(x1, y1, x, y) {
  let distan = dist(x1, y1, x, y);
  return distan * 100 / dist(width, height, 0, 0);
}

function dibujarElipse(x, y, tono) {
  let tamano = 31;
  fill(246, 162, 247, tono);
  ellipse(x, y, tamano, tamano);
}
