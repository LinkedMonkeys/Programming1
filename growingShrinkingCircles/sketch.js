var circle1Size, circle2Size;
var growing;

function setup() {
  createCanvas(500, 500);
  noStroke();

    circle1Size = 0;
    circle2Size = 250;
    growing = false;
}

function draw() {
  background(0);
  fill(255);
  circleTouchingLine(width/2, height/2, circle1Size, true);
  
  rect(width/2, 0, width/2, height);
  fill(0);
  circleTouchingLine(width/2, height/2, circle2Size, false);
  
  if (circle1Size >= width/2) {
    growing = false;
  }

  if (circle1Size <= 0) {
    growing = true;
  }

  if (growing) {
    circle1Size = circle1Size + 1;
    circle2Size = circle2Size - 1;
  } else {
    circle1Size = circle1Size - 1;
    circle2Size = circle2Size + 1;
  }
}

function circleTouchingLine(x, y, diameter, pointOnRight) {
  if (pointOnRight) {
    ellipse(x-diameter/2, y, diameter, diameter);
  } else {
    ellipse(x+diameter/2, y, diameter, diameter);
  }
}
