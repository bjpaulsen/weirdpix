class BasicBrush extends Brush {
    constructor() {
        super();
    }

    drawAtXY() {
        ellipse(x, y, brushSize, brushSize);
    }
}