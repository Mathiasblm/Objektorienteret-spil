var canvas, ctx;
window.onload = function() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  document.addEventListener("keydown", keyDownEvent);
  var x = 8;
  setInterval(draw, 1000 / x);
};

function keyDownEvent(e) {
    snake.changeDirection(e);
}

//Game objects
let snake = new Snake(10,10,3);
let apple = new Apple(15,15);

//2d grid
let grid = new Grid(20,20);

function draw() {
    // move snake in next pos
    snake.move();

    // snake over game world
    grid.overGameWorld(snake);
    
    //apple gets eaten
    if (snake.snakeX == apple.appleX && snake.snakeY == apple.appleY) {
        apple.eaten();
    }

    //canvas
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //snake
    ctx.fillStyle = "green";
    for (var i = 0; i < snake.snakeTrail.length; i++) {
      ctx.fillRect(
        snake.snakeTrail[i].x * grid.tileSize,
        snake.snakeTrail[i].y * grid.tileSize,
        grid.tileSize,
        grid.tileSize
      );

      //return size
      if (snake.snakeTrail[i].x == snake.snakeX && snake.snakeTrail[i].y == snake.snakeY) {
        snake.die();
      }
    }

    // apple
    ctx.fillStyle = "red";
    ctx.fillRect(apple.appleX * grid.tileSize, apple.appleY * grid.tileSize, grid.tileSize, grid.tileSize);

    //set snake trail
    snake.snakeTrail.push({ x: snake.snakeX, y: snake.snakeY });
    while (snake.snakeTrail.length > snake.tailSize) {
      snake.snakeTrail.shift();
    }
}