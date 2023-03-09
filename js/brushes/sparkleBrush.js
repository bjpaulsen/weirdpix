class SparkleBrush extends Brush {
    constructor() {
        super();

        this.stars = [];
        this.stars[0] = loadImage('assets/images/stars/star1.png');
        this.stars[1] = loadImage('assets/images/stars/star2.png');
        this.stars[2] = loadImage('assets/images/stars/star3.png');
        this.stars[3] = loadImage('assets/images/stars/star4.png');
        this.stars[4] = loadImage('assets/images/stars/star5.png');
        this.stars[5] = loadImage('assets/images/stars/star6.png');
        this.starLength = this.stars.length;

        this.starSize = 30;
        this.starSpawnNumScale = 200;
    }

    drawAtXY(x, y) {
        for(this.i = 0; this.i < brushSize / this.starSpawnNumScale; this.i++) {
            this.randomInt = Math.floor((Math.random() * this.starLength));
            this.xOffset = Math.random() * brushSize / 2;
            this.yOffset = Math.random() * brushSize / 2;

            push();
            translate(x, y, 0);
            rotate(random(PI));

            image(this.stars[this.randomInt], this.xOffset, this.yOffset , this.starSize, this.starSize);
            
            pop();
        }
        
    }
}