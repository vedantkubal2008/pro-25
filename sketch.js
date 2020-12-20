
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,Lbody,Rbody,Base,ground
var engine,world
var dImg;
function preload()
{
	dImg = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1600, 700);



	engine = Engine.create();
	world = engine.world;
	var options = {
		isStatic: true
	}
	ground = Bodies.rectangle(800,680,1600,20,options);
	World.add(world,ground);
	
	//Create the Bodies Here.
	paper = new Paper(300,670);
	Lbody = new Dustbin(920,560,20,160);
	Base = new Dustbin(850,650,170,20);
	Rbody = new Dustbin(770,560,20,160);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  paper.display();
  Lbody.display();
  Rbody.display();
  Base.display();
  image(dImg,753,480,190,190);
  
  fill("gray");
  rect(ground.position.x,ground.position.y,1600,20);
  
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}

