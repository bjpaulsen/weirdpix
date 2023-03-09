class BrushColor extends UIElement {
    constructor(ui) {
        super();
        this.wheel = loadImage('assets/images/colorCircle.png');
        this.selected = false;
        this.setSmall();
    }

    draw() {
        image(this.wheel, this.x, this.y, this.diameter, this.diameter);
    }

    mousePressed() {
        if (!this.selected) {
            this.select();
        } else {
            BasicBrush.color = get(mouseX,mouseY);
            print(BasicBrush.color);
            this.deselect();
        }
    }

    select() {
        this.selected = true;
        this.setBig();
    }

    deselect() {
        this.selected = false;
        this.setSmall();
    }


    setSmall() {
        this.diameter = 100;
        this.x = width - this.diameter*2;
        this.y = 0;
        this.setPos();
    }

    setBig() {
        this.diameter = 1000;
        this.x = width/2 - this.diameter/2;
        this.y = height/2 - this.diameter/2;
        this.setPos();
    }

    setPos() {
        this.x1 = this.x;
        this.y1 = this.y;
        this.x2 = this.x + this.diameter;
        this.y2 = this.y + this.diameter;
    }
}