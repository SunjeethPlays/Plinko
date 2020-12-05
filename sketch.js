const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var ground;

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground (240,795,480,10);

}

function draw() {
  background("black");  
  Engine.update(engine);

  for (var i = 0; i <= width; i = i+80) {
    divisions.push(new Division( i, height - divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <= width; j = j+50) {
    plinkos.push(new Plinko(j,75,10,10));
  }

  for (var j = 15; j <= width-10; j = j+50) {
    plinkos.push(new Plinko(j,175,10,10));
  }

  for (var j = 40; j <= width; j = j+50) {
    plinkos.push(new Plinko(j,275,10,10));
  }

  for (var j = 15; j <= width-10; j = j+50) {
    plinkos.push(new Plinko(j,375,10,10));
  }


  if (frameCount%60 === 0) {
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  for (var j = 0; j < divisions.length; j++) {
    divisions[j].display();
  }

  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  ground.display();
  
  drawSprites();
}