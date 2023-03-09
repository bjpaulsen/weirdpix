class BasicBrush extends Brush {
    constructor() {
        super();
        this.color = color(0,0,0);
    }

    drawAtXY(x, y) {
        push();

        fill(this.color);
        ellipse(x, y, brushSize, brushSize, 50);

        pop();
    }
}