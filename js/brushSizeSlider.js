let brushSize = 30;

class BrushSizeSlider {
    constructor() {
        this.padding = 20;
        this.rightPadding = 100 + this.padding;
        this.width = 400;
        this.height = 200;
        this.min = 10;
        this.max = 200;
        this.color = 0;

        this.lineShift = 50;
        
        this.x2 = width - this.rightPadding - this.padding/2;
        this.x1 = this.x2 - this.width;
        this.y2 = height - this.padding;
        this.y1 = this.y2 - this.height;
        this.lineY = this.y1+this.height/2;

        brushSize = 30;
    }

    draw() {
        push();

        // refresh slider background so the slider can update
        fill(240);
        rect(this.x1-this.padding-this.lineShift, this.y1-this.padding, this.x2 + this.rightPadding, this.y2+this.padding, 200);

        // draw slider line
        stroke(this.color)
        line(this.x1, this.lineY, this.x2+this.lineShift, this.lineY);
        
        // draw size circle
        fill(backgroundColor);
        ellipse(map(brushSize, this.min, this.max, this.x1, this.x2), this.lineY, brushSize);

        pop();
    }

    mouseWithin() {
        return mouseX >= this.x1-this.padding-this.lineShift && mouseX <= this.x2+this.rightPadding && mouseY >= this.y1 - this.padding && mouseY <= this.y2 + this.padding;
    }

    mouseDragged() {
        brushSize = map(constrain(mouseX, this.x1, this.x2), this.x1, this.x2, this.min, this.max)
    }
}