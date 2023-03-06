// Abstract class - do not instantiate, create subclasses for each UI Element
// Represents a single element such as a button or slider.
class UIElement {
    constructor() {
        if (this.constructor == UIElement)
            throw new Error("You cannot create an instance of Abstract class UIElement - create an instance of one of its subclasses.");
    }

    draw() {
        throw new Error("Method 'draw' must be implemented by a subclass.");
    }

    mousePressed() {
        throw new Error("Method 'mousePressed' must be implemented by a subclass.");
    }

    // returns true if the given coordinates are within the UI element's bounds
    withinBounds(x, y) {
        return x >= this.x1 && x <= this.x2 && y >= this.y1 && y <= this.y2;
    }
}