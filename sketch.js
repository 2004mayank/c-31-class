const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;

var bg_img;
var food;
var rabbit;

function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbiti = loadAnimation("blink_1.png","blink_2.png","blink_3.png");
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  button = createImg('cut_button.png');
   button.position(200,30);
   button.size(50,50);
button.mouseClicked(drop);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  rabit=createSprite(248,520,50,50)
  rabit.addAnimation("blinking",rabbiti)
  rabit.scale=0.20
}

function draw() 
{
  background(51);
 
 // image(bg_img,width/2,height/2,490,690);

  image(food,fruit.position.x,fruit.position.y,70,70);
  rope.show();
  Engine.update(engine);
  ground.show();
 drawSprites()
 console.log(fruit.position.x+"         "+fruit.position.y)
 console.log(rabit.y+"rabit       "+rabit.x)
 if(fruit.position.x>rabit.x-100&&fruit.position.xis<rabit.x+100&&fruit.position.y>rabit.y-100){
 background("blue")
   console.log("fruit hit rabit")
 }
 
}


function drop(){
rope.break()
fruit_con.removelink()
}