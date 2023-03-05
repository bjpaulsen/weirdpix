class BasicBrush extends Brush {
    constructor() {
        super();
    }

    drawAtXY(x, y) {
        ellipse(x, y, brushSize, brushSize);
    }
}