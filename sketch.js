var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload(){
	
}



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	paper = new Paper(200,600,30);
	rect1 = new Log(550,600,20,100);
	rect2 = new Log(650,600,20,100);
	rect3 = new Log(600,640,100,20);
    chain = new Slingshot(paper.body,{x:200,y:500});
  
}


function draw() {
  rectMode(CENTER);
  background(120);
  paper.display();
  rect1.display();
  rect2.display();
  rect3.display();
  chain.display();
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
	}
	
	function mouseReleased(){
		chain.fly();
	}


