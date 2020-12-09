let movers=[]
var G=10
var distance1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function setup() {
	createCanvas(800, 800);


  engine = Engine.create();
  world = engine.world;
 

p1= new particle(600,600)
p2= new particle(200,200)
Matter.Body.setStatic(p2.body,true)
ground=new Ground(750,750)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 
  p1.display()
p2.display()
ground.display()
gravity()
}
function keyPressed(){
  if(keyCode==32){
    Matter.Body.setPosition( p1.body, {x: p2.body.position.x, y: p2.body.position.y});
//Matter.Body.setStatic(p1.body,true)
  if(p1.body.position.x==p2.body.position.x){
    Matter.Body.setPosition( p1.body, {x: p2.body.position.x-25, y: p2.body.position.y-25});
    Matter.Body.setStatic(p1.body,true)
p3=new particle(400,400)
p3.display()
  }}
   distance1=dist(p1.body.position.x,p1.body.position.y,p2.body.position.x,p2.body.position.y)
console.log(distance1)
}
//function mouseDragged(){
 // Matter.Body.applyForce( p1.body,p1.body.position, {x: 5, y: 0});
   // Matter.Body.setVelocity(p1.body,{x:-1,y:-1})
//}}
function gravity(){
  var M1=p1.body.mass
  console.log(M1)
  var F=(G*p1.body.mass*p2.body.mass)/distance1*distance1
  console.log(F)
}
