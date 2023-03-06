// Abstract class - do not instantiate, create subclasses for each brush
class Brush {
    constructor() {
        if (this.constructor == Brush)
            throw new Error("You cannot create an instance of Abstract class Brush - create an instance of one of its subclasses.");
    }

    // do not override unless you have a good reason
    draw() {
        this.drawAtXY(mouseX, mouseY);
    }

    // override this to implement a brush
    drawAtXY(x, y) {
        throw new Error("Method 'drawAtXY' must be implemented by a subclass.");
    }

    // optional method for brushes that need to be reset
    reset() {
    }
}