class Game {
    constructor(){
        this.blockSize = 40;
        this.widthInBlocks = width / this.blockSize;
        this.heightInBlocks = height / this.blockSize;
        this.score = 0;  
    }
    drawBorder() {
        ctx.fillStyle = "Gray";
        ctx.fillRect(0, 0, width, this.blockSize);
        ctx.fillRect(0, height - this.blockSize, width, this.blockSize);
        ctx.fillRect(0, 0, this.blockSize, height);
        ctx.fillRect(width - this.blockSize, 0, this.blockSize, height);
    };

    drawScore() {
        ctx.font = "20px Courier";
        ctx.fillStyle = "Black";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText("Счет: " + this.score, this.blockSize, this.blockSize);
    };

    gameOver() {
        clearInterval(gameLoop);
        ctx.font = "60px Courier";
        ctx.fillStyle = "Black";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Конец игры: ", width / 2, height / 2);
    };

    circle(x, y, radius, fillCircle) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        if (fillCircle) {
            ctx.fill();
        } else {
            ctx.stroke();
        }
    }
}
