class BasicBrush extends Brush {
    constructor() {
        super();
    }

    draw() {
        ellipse(mouseX, mouseY, brushSize, brushSize);
    }
}