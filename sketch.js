
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, paperObject,groundObject;	
var dustbinImg, paperImg;
function preload()
{
	dustbinImg=loadImage("dustbingreenImg.png");
	paperImg=loadImage("paperImg.png");
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinObj=new Dustbin(1200,650);
	dustbinObj.addImage(dustbinImg);
	paperObject=new Paper(200,450,40);
	paperObject.addImage(paperImg);
	groundObject=new Ground(width/2,670,width,20);

	Engine.run(engine);
  
}


function draw() {
   background(0);
  
   dustbinObj.display();
   paperObject.display();
   groundObject.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
	}
}

