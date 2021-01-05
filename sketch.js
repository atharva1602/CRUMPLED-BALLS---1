var dustbin1,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ballSprite,groundSprite;




function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)
	
	dustbin1 = createSprite(width/2,655,170,10);

	dustbin2 = createSprite(310,610,10,100);

	dustbin3 = createSprite(480,610,10,100);




	ballSprite=createSprite(width/2,80, 10,10);
	ballSprite.scale=3
    ballSprite.shapeColor=color(255)



	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	
	ballSpriteBody = Bodies.circle(width/2 , 200 , 5 , {restitution:2, isStatic:true});
	World.add(world, ballSpriteBody);

	Engine.run(engine);
  
}



function draw() {
	rectMode(CENTER);
	background(0);

	drawSprites();
   
  }
  function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(ballSprite,false);
	   
	 }
   }
   

  