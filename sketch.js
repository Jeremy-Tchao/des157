function setup()
{
    var myCanvas = createCanvas(1020,200); 
    myCanvas.parent('mySketch');
    
    
}

function draw()
{
    
    if(mouseIsPressed)
        fill(0);
    else
        fill(255);
        
    ellipse(mouseX,mouseY,80,80);

}