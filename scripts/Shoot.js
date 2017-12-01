class Shoot {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.xSize = 6;
        this.ySize = 6;
    };

    draw(context) {
        var image = document.getElementById("bulletHoleImage");
        context.drawImage(image, this.x - this.xSize / 2, this.y - this.ySize / 2, this.xSize , this.ySize);
    };

}