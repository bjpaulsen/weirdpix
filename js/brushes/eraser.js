class Eraser extends Brush {
    constructor() {
        super();
    }

    drawAtXY(x, y) {
        push();
        fill(backgroundColor);
        ellipse(x, y, brushSize, brushSize, 50);
        pop();
    }
}