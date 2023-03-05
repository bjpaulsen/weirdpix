class BasicPyoroBrush extends Brush {

    constructor() {
        super();
        this.pyoro = loadImage('assets/images/pyoro.png');
        
    }

    draw() {
        image(this.pyoro, mouseX, mouseY, brushSize, brushSize);
    }
}