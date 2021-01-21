console.log("Hello from main");

// set up game window
canvas = document.createElement("canvas");
canvas.height = 575;
canvas.width = 1250;
canvas.style.border = "5px solid gray";
canvas = document.body.appendChild(canvas);

// create a new nut object
let nut1 = new Nut({x: 300, y: 200}, {x: 5, y: 2}, 10, "red");
let nut2 = new Nut({x: 50, y: 200}, {x: 2, y: 5}, 20, "blue");
let nut3 = new Nut({x: 80, y: 200}, {x: 3, y: 7}, 25, "green");
let nut4 = new Nut({x: 90, y: 180}, {x: 17, y: 2}, 15, "yellow");
let nut5 = new Nut({x: 150, y: 120}, {x: 6, y: 2}, 30, "pink");

// refresh game 60 times each second
function gameloop () {
  //clear the canvas
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

  //draw and move nuts
  nut1.draw();
  nut2.draw();
  nut3.draw();
  nut4.draw();
  nut5.draw();
  nut1.move();
  nut2.move();
  nut3.move();
  nut4.move();
  nut5.move();
}
setInterval(gameloop, 1000/60)
