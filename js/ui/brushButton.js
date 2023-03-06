class BrushButton extends UIElement {
    static order = 0;

    constructor(ui, brush) {
        super();
        this.brush = brush;
        this.selected = false;
        
        this.diameter = 60;
        
        this.x = ui.x1/2;
        this.y = 50 + BrushButton.order * 90;
        this.order = BrushButton.order;
        BrushButton.order++;

        this.x1 = this.x-this.diameter/2;
        this.y1 = this.y-this.diameter/2;
        this.x2 = this.x+this.diameter/2;
        this.y2 = this.y+this.diameter/2;
    }

    draw() {
        this.drawButtonCircle();
        this.drawBrushIcon();
    }
    
    drawButtonCircle() {
        push();
        noFill();
        stroke(UI_COLOR);
        let selectWeight = 6;
        strokeWeight(STROKE_WEIGHT + selectWeight*this.selected)
        ellipse(this.x, this.y, this.diameter, this.diameter, 50);
        pop();
    }

    drawBrushIcon() {
        let iconSize = 30;
        let rememberBrushSize = brushSize;
        brushSize = iconSize;

        this.brush.drawAtXY(this.x, this.y);
        this.brush.reset();

        brushSize = rememberBrushSize;
    }

    mousePressed() {
        this.select();
    }
    
    select() {
        this.selected = true;
        activeBrush = brushes[this.order];
    }

    deselect() {
        this.selected = false;
    }
}