let kirbies;
let x;
let y;

function setup() {
  createCanvas(1000, 1000);
  
  kirbies=loadImage('assets/models/kirbyMany.png');
}

function draw() {
  if(mouseIsPressed){
   drawKirbies();
  }
}


function drawKirbies() {
  frameRate(8);
  x=random(kirbies.width);
  y=random(kirbies.height);
  let pixelRegion=kirbies.get(x,y,80,80);
  image(pixelRegion,mouseX,mouseY,80,80);
}