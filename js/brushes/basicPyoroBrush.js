class BasicPyoroBrush extends Brush {
    constructor() {
        super();
        this.pyoro = loadImage('assets/images/pyoro.png');
    }

    drawAtXY(x, y) {
        image(this.pyoro, x-brushSize/2, y-brushSize/2, brushSize, brushSize);
    }
}