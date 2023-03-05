class BasicPyoroBrush extends Brush {

    constructor() {
        super();
        this.pyoro = loadImage('assets/images/pyoro.png');
    }

    drawAtXY() {
        image(this.pyoro, x, y, brushSize, brushSize);
    }
}