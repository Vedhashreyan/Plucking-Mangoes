
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var boy , boyImage;
var stone; 
function preload()
{
	boyImage=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	  boy = createSprite(200,600,20,50);
	  boy.addImage(boyImage);
	  boy.scale=0.075
	  stone = new Stone(200,590,20,20)
      tree = new Tree(680,500,200,50);
	  ground = new Ground(500,690,1000,100);
	  mango1 = new  Mango(690,410,30,20);
	  mango2 = new Mango(660,420,30,20)
	  mango3 = new Mango(630,435,30,20)
	  mango4 = new Mango(720,420,30,20)
	  mango5 = new Mango(690,450,30,20)
	  mango6 = new Mango(740,450,30,20)
	  mango7 = new Mango(630,470,30,20)
	  mango8 = new Mango(600,470,30,20)
	  boyShot = new Shot(stone.body,{x:160,y:570});
	Engine.run(engine);
  
}


function draw() {
  background("lightgrey");
  rectMode(CENTER);
  fill("grey")
  textSize(20);
  text("Press space to get another chance",100,100);
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    boyShot.fly();
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}


function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:150,y:550})
		boyShot.attach(stone.body);
	}
}

