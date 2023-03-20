/*
let brush;

function setup() {
  createCanvas(1000, 1000);
  
  brush = loadImage('assets/images/pyoro1.png');   
}

function draw() {
  if(mouseIsPressed){
    drawPyoro(100, 0.035);
  }
}


function drawPyoro(brushSize, speed){
  push();
  translate(mouseX, mouseY);
  scale( sin(frameCount*speed) + 2 );
  image(brush, 0, 0, brushSize,brushSize); 
  pop();
}
*/

class FatPyoroBrush extends Brush {
    constructor() {
        super();
        this.Fpyoro = loadImage('assets/images/pyoro1.png');
    }

    drawAtXY(x, y) {
        let speed = 0.035;
        push();
        translate(x, y);
        scale( sin(frameCount*speed) + 2 );
 	    image(this.Fpyoro, -15, -15, brushSize,brushSize); 
        pop();
    }
}