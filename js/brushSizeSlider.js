let brushSize = 30;

class BrushSizeSlider {
    constructor(ui) {
        this.padding = 20;
        this.min = 10;
        this.max = 200;

        this.lineShift = 50;
        
        this.x1 = ui.x2+STROKE_WEIGHT/2;
        this.x2 = width;
        this.width = this.x2-this.x1;
        this.height = 400;
        this.y2 = height - this.padding;
        this.y1 = this.y2 - this.height;
        this.lineX = this.x1+this.width/2;
    }

    draw() {
        push();

        // draw slider line
        stroke(UI_COLOR);
        line(this.lineX, this.y1, this.lineX, this.y2);
        
        // draw size circle
        fill(backgroundColor);
        ellipse(this.lineX, map(brushSize, this.min, this.max, this.y2, this.y1), brushSize);

        pop();
    }

    withinBounds(x, y) {
        return x >= this.x1 && x <= this.x2 && y >= this.y1 && y <= this.y2;
    }

    mousePressed() {
        brushSize = map(constrain(mouseY, this.y1, this.y2), this.y2, this.y1, this.min, this.max);
    }
}