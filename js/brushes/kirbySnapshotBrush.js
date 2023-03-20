/*
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
*/
class KirbySnapshotBrush extends Brush {
    constructor() {
        super();
        this.kirby = loadImage('assets/images/kirbyMany.png');
    }

    drawAtXY(x, y) {
        frameRate(8);
        let Px=random(this.kirby.width);
        let Py=random(this.kirby.height);
        let pixelRegion=this.kirby.get(Px,Py,80,80);
        image(pixelRegion,x,y,80,80);
    }
}