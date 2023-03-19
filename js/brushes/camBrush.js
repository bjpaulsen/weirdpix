class CameraBrush extends Brush {
    constructor() {
        super();
        this.cam = createCapture(VIDEO);
        this.cam.hide();
    }

    drawAtXY(x, y) {
        push()
        image(this.cam, x-brushSize/2, y-brushSize/2, brushSize, brushSize);
        pop()
        
        
    }
}