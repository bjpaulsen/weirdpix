class UI {
    constructor() {
        this.x1 = 100;
        this.y1 = 5;
        this.x2 = width - 200;
        this.y2 = height-5;

        this.brushSizeSlider = new BrushSizeSlider();
    }

    draw() {
        push();
        noFill();
        stroke(0);
        rect(this.x1, this.y1, this.x2, this.y2);
        pop();

        this.brushSizeSlider.draw();
    }

    withinBounds(x, y) {
        return x >= this.x1 + STROKE_WEIGHT && x <= this.x2 - STROKE_WEIGHT
            && y >= this.y1 + STROKE_WEIGHT && y <= this.y2 - STROKE_WEIGHT;
    }
}