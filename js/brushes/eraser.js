class Eraser extends Brush {
    constructor() {
        super();
    }

    drawAtXY(x, y) {
        push();
        fill(backgroundColor);
        ellipse(x, y, brushSize, brushSize);
        pop();
    }
}