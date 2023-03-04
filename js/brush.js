// Abstract class - do not instantiate, create subclasses for each brush
class Brush {
    constructor() {
        if (this.constructor == Brush)
            throw new Error("You cannot create an instance of Abstract class Brush - create an instance of one of its subclasses.")
    }

    draw() {
        throw new Error("Method 'draw' must be implemented by a subclass.")
    }
}