class UndoButton extends UIElement {
    constructor(ui) {
        super();

        this.diameter = 60;

        this.x = ui.x1/2;
        this.y = ui.y2 - 30;

        this.x1 = this.x-this.diameter/2;
        this.y1 = this.y-this.diameter/2;
        this.x2 = this.x+this.diameter/2;
        this.y2 = this.y+this.diameter/2;
    }

    draw() {
        this.drawButtonCircle();
    }

    drawButtonCircle() {
        push();
        noFill();
        stroke(UI_COLOR);
        let selectWeight = 6;
        strokeWeight(STROKE_WEIGHT)
        ellipse(this.x, this.y, this.diameter, this.diameter, 50);
        pop();
    }

    mousePressed() {
        if (prevCanvas.length > 0) {
            image(prevCanvas[prevCanvas.length - 1], 0, 0);
            prevCanvas.pop();
        }
    }
}