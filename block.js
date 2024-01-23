class Block {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }
    drawSquare(color) {
        let x = this.col * game.blockSize;
        let y = this.row * game.blockSize;
        ctx.fillStyle = color;
        ctx.fillRect(x, y, game.blockSize, game.blockSize);
    }
    drawCircle(color) {
        let centerX = this.col * game.blockSize + game.blockSize / 2;
        let centerY = this.row * game.blockSize + game.blockSize / 2;
        ctx.fillStyle = color;
        game.circle(centerX, centerY, game.blockSize / 2, true);
    }
    drawHead() {
        ctx.lineWidth = 8;
        ctx.strokeStyle = "Black";
        ctx.fillStyle = "Gold";

        circle(this.col, this.row, 32, true);
        circle(this.col, this.row, 32, false);
        circle(this.col - 20, this.row - 44, 20, false);
        circle(this.col + 20, this.row - 44, 20, false);
        circle(this.col - 8, this.row - 4, 8, false);
        circle(this.col + 8, this.row - 4, 8, false);
    }
    equal(otherBlock) {
        return this.col === otherBlock.col && this.row === otherBlock.row;
    }
}
