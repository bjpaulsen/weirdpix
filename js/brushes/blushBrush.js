class BlushBrush extends Brush {
    constructor() {
        super();

        this.blushImg = loadImage('assets/images/snort.png');
        this.eatImg = loadImage('assets/images/eat.png');

        this.timeScale = 500;

    }

    drawAtXY(x, y) {
        push();

        translate(sin(Date.now() / this.timeScale) * brushSize, cos(Date.now() / this.timeScale) * brushSize, 0);
        image(this.blushImg, x-brushSize/2, y-brushSize/2, brushSize, brushSize);

        pop();

        push();

        translate(cos(Date.now() / this.timeScale) * brushSize, sin(Date.now() / this.timeScale) * brushSize, 0);
        image(this.eatImg, x-brushSize/2, y-brushSize/2, brushSize, brushSize);

        pop();
    }
} 