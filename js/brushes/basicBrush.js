class BasicBrush extends Brush {
    constructor() {
        super();
    }

    draw() {
        ellipse(mouseX, mouseY, 20, 20);
    }
}