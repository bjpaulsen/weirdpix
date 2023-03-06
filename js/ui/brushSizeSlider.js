let brushSize = 30;

class BrushSizeSlider extends UIElement {
    constructor(ui) {
        super();
        this.min = 10;
        this.max = 200;
                
        this.x1 = ui.x2+STROKE_WEIGHT/2;
        this.x2 = width;

        this.width = this.x2-this.x1;
        this.height = 400;

        this.y2 = height - 20;
        this.y1 = this.y2 - this.height;

        this.lineX = this.x1+this.width/2; // the x coordinate of the slider line
    }

    // draw the slider each frame
    draw() {
        push();

        // draw slider line
        stroke(UI_COLOR);
        line(this.lineX, this.y1, this.lineX, this.y2);
        
        // draw size circle
        ellipse(this.lineX, map(brushSize, this.min, this.max, this.y2, this.y1), brushSize, brushSize, 50);

        pop();
    }

    // adjusts the brush size when the player interacts with the slider
    mousePressed() {
        brushSize = map(constrain(mouseY, this.y1, this.y2), this.y2, this.y1, this.min, this.max);
    }
}