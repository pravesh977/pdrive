var x= 50
var y= 50
var a=2
function setup() {
  createCanvas(640,480);
}

function draw() {
    background(231, 78, 55);
    
    fill(70, 180, 220);
    if (x > 100) {
        fill(20, 68, 189);
    }
    ellipse(320, 240, x, y);
    if (x>200) {
        a=-2;
      
    }
      x= x+a;
      y= y+a
    }    
    x= x+1;
    y= y+1;
    
   
