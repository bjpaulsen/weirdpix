class BlushBrush extends Brush {
    constructor() {
        super();

        this.blushImg = loadImage('assets/images/snort.png');
        this.eatImg = loadImage('assets/images/eat.png');

        this.timeScale = 500;

    }

    drawAtXY(x, y) {

        this.sinOffset = sin(Date.now() / this.timeScale) * brushSize;
        this.cosOffset = cos(Date.now() / this.timeScale) * brushSize;

        push();

        translate(this.sinOffset, this.cosOffset, 0);
        image(this.blushImg, x-brushSize/2, y-brushSize/2, brushSize, brushSize);

        pop();

        push();

        translate(this.cosOffset, this.sinOffset, 0);
        image(this.eatImg, x-brushSize/2, y-brushSize/2, brushSize, brushSize);

        pop();
    }
} 