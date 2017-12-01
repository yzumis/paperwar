class Stickman {

    constructor(x, y, xSize, ySize, color) {
        this.x = x;
        this.y = y;
        this.xSize = xSize;
        this.ySize = ySize;
        this.color = color;
        this.death = false;
    };

    injured(x, y) {
        var impactX = (x > this.x) && (x < this.x + this.xSize);
        var impactY = (y > this.y) && (y < this.y + this.ySize);
        return impactX && impactY;
    };

    kill() {
        this.death = true;
    }

    draw(context) {
        if(this.death) {
            var image = document.getElementById("stickmanDeathImage");
            context.drawImage(image, this.x, this.y, this.xSize, this.ySize);
        } else {
            var image = document.getElementById("stickmanImage");
            context.drawImage(image, this.x, this.y, this.xSize, this.ySize);
        }
    };

    drawCircle(context, xOrigin, yOrigin, radius) {
        context.beginPath();
        context.strokeStyle = this.color;
        context.arc(xOrigin, yOrigin, radius, 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.stroke();
    };

}