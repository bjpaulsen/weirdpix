class BasicPyoroBrush extends Brush {

    constructor() {
        super();
        this.pyoro = loadImage('assets/images/pyoro.png');
    }

    drawAtXY(x, y) {
        image(this.pyoro, x, y, brushSize, brushSize);
    }
}