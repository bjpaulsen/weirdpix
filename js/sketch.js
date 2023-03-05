// sketch.js - purpose and description here
// Author: Your Name
// Date:

// Constants
let STROKE_WEIGHT = 4;
let UI_COLOR = 0;

// Globals
let brushes;
let activeBrush; // the currently selected brush
let canvasContainer;
let ui;
let backgroundColor = 255;

function setup() {
    // place our canvas, making it fit our container
    canvasContainer = $("#canvas-container");
    let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
    canvas.parent("canvas-container");

    ui = new UI();
    brushes = [
        new BasicBrush()
    ];
    activeBrush = brushes[0];

    background(backgroundColor);
    rectMode(CORNERS);
    noStroke();
    strokeWeight(STROKE_WEIGHT);
    fill(0);
}

function draw() {
    ui.draw();
}

function mouseDragged() {
    mousePressed();
}

function mousePressed() {
    if (ui.withinDrawZone(mouseX, mouseY)) activeBrush.draw();
    else ui.handleInteractions();
}