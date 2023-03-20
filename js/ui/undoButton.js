class UndoButton extends UIElement {
    constructor(ui) {
        super();

        this.undoImage = loadImage('assets/images/undo.png');

        this.diameter = 60;

        this.x = ui.x2+100;
        this.y = ui.y1+40;

        this.x1 = this.x-this.diameter/2;
        this.y1 = this.y-this.diameter/2;
        this.x2 = this.x+this.diameter/2;
        this.y2 = this.y+this.diameter/2;
    }

    draw() {
        this.drawButtonCircle();
        image(this.undoImage, this.x1+5, this.y1+5, 50, 50)
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