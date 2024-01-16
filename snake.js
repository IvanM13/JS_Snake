class Snake {
    constructor() {
        this.segment = [
            new Block(7, 5),
            new Block(6, 5),
            new Block(5, 5)
        ];

        this.direction = "right";
        this.nextDirection = "right";
    }
    draw() {
        for (let i = 0; i < this.segment.length; i++) {
            this.segment[i].drawSquare("Blue");
        }
    };

    move() {
        let head = this.segment[0];
        let newHead;

        this.direction = this.nextDirection;

        if (this.direction === "right") {
            newHead = new Block(head.col + 1, head.row);
        } else if (this.direction === "down") {
            newHead = new Block(head.col, head.row + 1);
        } else if (this.direction === "left") {
            newHead = new Block(head.col - 1, head.row);
        } else if (this.direction === "up") {
            newHead = new Block(head.col, head.row - 1);
        }

        if (this.checkCollision(newHead)) {
            game.gameOver();
            return;
        }
        this.segment.unshift(newHead);
        if (newHead.equal(apple.position)) {
            game.score++;
            apple.move();

        } else {
            this.segment.pop();
        }
    };

    checkCollision(head) {
        let leftCollision = (head.col === 0);
        let topCollision = (head.row === 0);
        let rightCollision = (head.col === game.widthInBlocks - 1);
        let bottomCollision = (head.row === game.heightInBlocks - 1);

        let wallCollision = leftCollision || topCollision ||
            rightCollision || bottomCollision;

        let selfCollision = false;

        for (let i = 0; i < this.segment.length; i++) {
            if (head.equal(this.segment[i])) {
                selfCollision = true;
            }
        }

        return wallCollision || selfCollision;
    };

    setDirection(newDirection) {
        if (this.direction === "up" && newDirection === "down") {
            return;
        } else if (this.direction === "right" && newDirection === "left") {
            return;
        } else if (this.direction === "down" && newDirection === "up") {
            return;
        } else if (this.direction === "left" && newDirection === "right") {
            return;
        }

        this.nextDirection = newDirection;
    };
}