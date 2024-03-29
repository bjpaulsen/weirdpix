// sketch.js - purpose and description here
// Author: Your Name
// Date:

// Constants
let STROKE_WEIGHT = 6;
let UI_COLOR = 0;

// Globals
let brushes;
let activeBrush; // the currently selected brush
let canvasContainer;
let ui;
let backgroundColor = 255;
let callFromDrag = false;
let prevCanvas = [];

function setup() {
    // place our canvas, making it fit our container
    canvasContainer = $("#canvas-container");
    let canvas = createCanvas(canvasContainer.width(), canvasContainer.height(), WEBGL);
    canvas.parent("canvas-container");

    // STEP 1: Add new brushes here
    // STEP 2: Add a BrushButton in ui.js constructor
    brushes = [
        new BasicBrush(),
        new BasicPyoroBrush(),
        new AdvancedPyoroBrush(),
        new SparkleBrush(),
        new BlushBrush(),
        new CameraBrush(),
        new FatPyoroBrush(),
        new KirbySnapshotBrush(),
        new Eraser(),
    ];
    ui = new UI();
    // Select the starting brush
    ui.brushButtons[0].select();

    cam = createCamera();
    cam.move((width/2),height/2,0);

    background(backgroundColor);
    rectMode(CORNERS);
    noStroke();
    strokeWeight(STROKE_WEIGHT);
    strokeCap(ROUND);
    strokeJoin(ROUND);
    fill(0);
}

function draw() {
    
    ui.draw();
}

function mouseDragged() {
    callFromDrag = true;
    if (!ui.UIElements[1].withinBounds(mouseX, mouseY)) mousePressed();
}

function mousePressed() {
    if (!callFromDrag && ui.withinDrawZone(mouseX, mouseY)) {
        prevCanvas.push(get());
    }
    if (ui.withinDrawZone(mouseX, mouseY)) activeBrush.draw();
    else ui.handleInteractions();
    callFromDrag = false;
}

function mouseWheel(event) {
    ui.UIElements[0].mouseWheel(event);
}

function keyPressed(){
    if (keyCode === DELETE){
        background(backgroundColor);
    }
}