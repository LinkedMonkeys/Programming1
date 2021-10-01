var x;
var y;
var TAIL_LENGTH = 100;

function setup() {
  createCanvas(500, 500);
  noStroke();
  
  x = [];
  y = [];
  for (var i=0; i<TAIL_LENGTH; i++) {
    x[i] = 0;
    y[i] = 0;
  }
}

function draw() {
  background(0);
  for (var i=0; i<x.length; i++) {
    fill(i*2.5, 0, 0);
    ellipse(x[i], y[i], i/2, i/2);
  }
  
  update(x, y);
}

function update(x, y) {
  for (var i=1; i<TAIL_LENGTH; i++) {
    x[i-1] = x[i];
    y[i-1] = y[i];
  }
  x[x.length-1] = mouseX;
  y[y.length-1] = mouseY;
}
