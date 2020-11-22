
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1= new dustbin(650,600,20,50);
	dustbin2= new dustbin(700,600,20,50);
	dustbin3= new dustbin(675,650,50,20);
	paper= new paper(100,625,20,50);
	ground= new ground(350,700,800,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  ground.display();
  drawSprites();
 
}



