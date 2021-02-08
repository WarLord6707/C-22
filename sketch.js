// namespacing - optional
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
// things which never changes

var engine,world;
var object1,object2;

function setup() {
  var canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  // JSON
  //  var name = { index: value };
  var object_option  = {
    isStatic:true
  }



  // creation - physical object
  object1= Bodies.rectangle(200,390,400,20,object_option);
  
  // add world - syntax
  World.add(world,object1);

  var ball_option={
   restitution:1
  }
object2=Bodies.circle(200,200,20,ball_option);
World.add(world,object2);

}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object1.position.x,object1.position.y,2400,20);
  ellipseMode(RADIUS);
  ellipse(object2.position.x,object2.position.y,20);
}