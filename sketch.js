
 var angle = 0;
 var targetAngle = 0;
 var easing = 0.6;
 
function setup()
{
    var myCanvas = createCanvas(1020,400); 
    myCanvas.parent('mySketch');
    background(255);
    
    
}

function draw()
{
    
   
    fill(255);
    
    noStroke();
    ellipse(width/2, height/2, 400, 400);
    stroke(0);
    strokeWeight(7);
  
    //calculation: rotation angle
  
    angle = atan2( mouseY - height/2, mouseX - width/2 );
    var dir = (angle - targetAngle + PI) / TWO_PI;
    dir -= round( dir );
    dir *= TWO_PI;
    targetAngle += dir * easing;
  
    translate(width/2, height/2);
    rotate(targetAngle);
    arc(0, 0, 200, 198, radians(-115), radians(113), CHORD);
  
  
  
    ellipse(-43, 1, 55, 177);
    fill(0);
    ellipse(-43, 3, 23, 113);

}