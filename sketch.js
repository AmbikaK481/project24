
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paperObject;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	paperObject=createSprite(width/2, 80, 10,10);


	dustbin=createSprite(width/2, 200, 10,10);
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	paperObject.body = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:false});
	World.add(world, packageBody);

	box1 = new Box(90,300,100,20);
	box2 = new Box(120,200,100,20);
	box3 = new Box(10,100,20,200);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperObject.x=paperObject.body.position.x;
  paperObject.y=paperObject.body.position.y;
   
  paperObject.display();
  dustbin.display();
  ground.display();
  drawSprites();
 
}

function keyPressed() {
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
}
 
}



