class BrushColor extends UIElement {
    constructor(ui) {
        super();
        this.wheel = loadImage('assets/images/colorCircle.png');
    }

    draw() {
        image(this.wheel, width - 100, 50, 50, 50)
    }

    mousePressed() {
    }
}