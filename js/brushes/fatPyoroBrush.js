let brush;

function setup() {
  createCanvas(1000, 1000);
  
  brush = loadImage('assets/images/pyoro1.png');   
}

function draw() {
  if(mouseIsPressed){
    drawPyoro(frameCount % 360, 100, 0.035);
  }
}


function drawPyoro(col, brushSize, speed){
  push();
  translate(mouseX, mouseY);
  scale( sin(frameCount*speed) + 2 );
  //rotate(frameCount*0.01);
 	image(brush, 0, 0, brushSize,brushSize); 
  pop();
}
