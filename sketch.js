function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(500, 300, 100, 70);
}

function draw() {
  background("lightgreen");  
  moving.x = mouseX
  moving.y = mouseY
  if (abs(fixed.x-moving.x)<=fixed.width/2+moving.width/2&&
  abs(fixed.y-moving.y)<=fixed.height/2+moving.height/2){
fixed.shapeColor = "blue"
moving.shapeColor = "lightblue"
  }else{
    fixed.shapeColor = "red"
    moving.shapeColor = "orange"  
  }
  drawSprites();
}