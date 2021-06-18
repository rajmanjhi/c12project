var boy,boy_running,edges;
var path;
var rightboundary;
var leftboundary;

    
    
function preload(){
 boy_running=loadAnimation("Runner-1.png","Runner-2.png")
    
  pathImage=loadImage("path.png");
 }

function setup(){
  createCanvas(400,400);
  
  
  path=createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY=4;
  path.scale=1.2;
  
  boy=createSprite(200,200,30,30);
boy.addAnimation("b1",boy_running)
boy.scale=0.1
  
  //creating right boundary and making it unvisible
  rightboundary=createSprite(410,0,100,800);
 rightboundary.visible=false;
  
  //creating left one and making it unvisible
  leftboundary=createSprite(0,0,100,800);
  leftboundary.visible=false;
  
  
 }

function draw() {
  background(0);
  
  
  
  
 
  
  if(path.y>400){
    path.y=path.width/2
  }
  
  
  
   
    drawSprites();
}
