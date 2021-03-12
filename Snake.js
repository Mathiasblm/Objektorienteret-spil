class Snake {
    constructor(snakeX, snakeY, defaultTailSize) {
        this.snakeX = snakeX;
        this.snakeY = snakeY;
        this.defaultTailSize = defaultTailSize;
        this.tailSize = this.defaultTailSize;
        this.nextX = 0;
        this.nextY = 0;
        this.snakeTrail = [];
    }
    
    move() {
        this.snakeX += this.nextX;
        this.snakeY += this.nextY;
    }
    
    changeDirection(e) {
        switch (e.keyCode) {
          case 37:
            this.nextX = -1;
            this.nextY = 0;
            break;
          case 38:
            this.nextX = 0;
            this.nextY = -1;
            break;
          case 39:
            this.nextX = 1;
            this.nextY = 0;
            break;
          case 40:
            this.nextX = 0;
            this.nextY = 1;
            break;
        }
    }
    
    die() {
        this.tailSize = this.defaultTailSize;
    }
}