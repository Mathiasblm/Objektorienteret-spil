class Grid {
    constructor(gridSize, tileSize) {
        this.gridSize = gridSize;
        this.tileSize = tileSize;
    }
    
    overGameWorld(snake) {
        if (snake.snakeX < 0) {
          snake.snakeX = this.gridSize - 1;
        }
        if (snake.snakeX > this.gridSize - 1) {
          snake.snakeX = 0;
        }

        if (snake.snakeY < 0) {
          snake.snakeY = this.gridSize - 1;
        }
        if (snake.snakeY > this.gridSize - 1) {
          snake.snakeY = 0;
        }
    }
}