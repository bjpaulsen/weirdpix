class AdvancedPyoroBrush extends Brush {
    constructor() {
        super();
        this.pyoro = loadModel('assets/models/pyoro.obj');
        this.callsTillSpray = 0;   
    }

    drawAtXY(x, y) {
        if (this.callsTillSpray <= 0) {
            push();
            translate(x, y, 0);
            scale(brushSize/100);
            noStroke();

            rotateX(random(PI));
            rotateY(random(PI));
            rotateZ(random(PI));

            fill(random(0,255),random(0,255),random(0,255));
            this.model = model(this.pyoro);
            pop();
            this.callsTillSpray = 20;
        }
        this.callsTillSpray--;
    }

    reset() {
        this.callsTillSpray = 0;
    }
}