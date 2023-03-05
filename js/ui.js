class UI {
    constructor() {
        this.x1 = 100;
        this.y1 = STROKE_WEIGHT/2;
        this.x2 = width - 220;
        this.y2 = (height-STROKE_WEIGHT/2)-50;

        this.UIElements = [
            new BrushSizeSlider(this)
        ];
    }

    draw() {
        this.refreshUIZone();
        this.drawBox();
        this.UIElements.forEach(element => {
            element.draw();
        });
        
    }

    drawBox() {
        push();
        noFill();
        stroke(UI_COLOR);
        rect(this.x1, this.y1, this.x2, this.y2);
        pop();
    }

    refreshUIZone() {
        push();
        fill(255);
        rect(0, 0, this.x1-STROKE_WEIGHT/2, height);
        rect(this.x2+STROKE_WEIGHT/2, 0, width, height);
        pop();
    }

    withinDrawZone(x, y) {
        return x >= this.x1 + STROKE_WEIGHT && x <= this.x2 - STROKE_WEIGHT
            && y >= this.y1 + STROKE_WEIGHT && y <= this.y2 - STROKE_WEIGHT;
    }

    handleInteractions() {
        this.UIElements.forEach(element => {
            if (element.withinBounds(mouseX, mouseY)) element.mousePressed();
        });
    }
}