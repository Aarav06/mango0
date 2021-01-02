const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var stone;
var boy, boy_load;
var mango0;
var mango1;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var mango7;
var mango8;

var sling,ground;
function preload()
{
	boy_load = loadImage("boy.png");
}

function setup() {
	var canvas = createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	stone = new Stone(235,420,30);
	

	tree = new Tree(1050,580);
	mango0 = new Mango(2000,200,30);
	mango1 = new Mango(1100, 200, 30);
	mango2 = new Mango(1170,130,30);
	mango3 = new Mango(1010,140,30);
	mango4 = new Mango(1000,70,30);

	mango5 = new Mango(1100,40,30);
	mango6 = new Mango(1000,210,30);
	mango7 = new Mango(1200,200,30);
	mango8 = new Mango(900,200,30);
	ground=new Ground(650,600,1300,20);
	sling = new Sling(stone.body,{x:235, y:420});
	Engine.run(engine);
  
}


function draw() {
  background("grey");

  image(boy_load,200,340,200,300);
  fill("white");
  text("Press Space To Reset Stone", 200, 200);

  stone.display();
  tree.display();
  mango0.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  ground.display();

  sling.display();
  drawSprites();
  detectCollision(stone, mango0);
  detectCollision(stone, mango1);
  detectCollision(stone, mango2) 
  detectCollision(stone, mango3) 
  detectCollision(stone, mango4) 
  detectCollision(stone, mango5) 
  detectCollision(stone, mango6) 
  detectCollision(stone, mango7) 
  detectCollision(stone, mango8) 

}

function mouseDragged(){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();

}

function detectCollision(lstone, lmango) {
	mangobody = lmango.body.position;
	stonebody = lstone.body.position;
	var distance = dist(stonebody.x, stonebody.y, mangobody.x, mangobody.y);
	if(distance<=lmango.r+lstone.r) {
		Matter.Body.setStatic(lmango.body, false);
	
	}
}

function keyPressed() {
	if(keyCode == 32) {
		Matter.Body.setPosition(stone.body, {x: 235, y:420});
		sling.attach(stone.body);
	}
}