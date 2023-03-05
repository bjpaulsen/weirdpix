class AdvancedPyoroBrush extends Brush {

    constructor() {
        super();
        this.pyoro = loadModel('assets/models/pyoro.obj');
        this.callsTillSpray = 0;   
    }

    drawAtXY(x, y) {
        if (this.callsTillSpray <= 0) {
            push();
            translate(x, y-brushSize/2, 0);
            scale(brushSize/100);
            noStroke();

            rotateX(random(-PI/4, PI/4));
            rotateY(random(-PI/4, PI/4));
            rotateZ(random(-PI/4, PI/4));

            fill(random(0,255),random(0,255),random(0,255));
            this.model = model(this.pyoro);
            pop();
            this.callsTillSpray = 20;
        }
        this.callsTillSpray--;
    }

    resetTimer() {
        this.callsTillSpray = 20;
    }
}