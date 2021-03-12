class Apple {
    constructor(appleX, appleY) {
        this.appleX = appleX;
        this.appleY = appleY;
    }
    
    eaten() {
        snake.tailSize++;
        this.appleX = Math.floor(Math.random() * grid.gridSize);
        this.appleY = Math.floor(Math.random() * grid.gridSize);
    }
}