class Apple {
    constructor() {
        this.position = new Block(10, 10);
    }
    draw() {
        this.position.drawCircle("LimeGreen");
    }
    move() {
        let randomCol = Math.floor(Math.random() * (game.widthInBlocks - 2)) + 1;
        let randomRow = Math.floor(Math.random() * (game.heightInBlocks - 2)) + 1;
        this.position = new Block(randomCol, randomRow);
    }
}