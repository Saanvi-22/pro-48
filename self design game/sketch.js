var bgImg;
var alienSpaceshipImg, spaceshipImg, asteroidImg, laserImg, alienSpaceshipImg2;
var bg;
var spaceship;
var asteroidGroup, alienSpaceshipGroup;
var life = 3;
//var spaceshipSound;


function preload(){
  bgImg = loadImage("space.jpeg");
  spaceshipImg = loadImage("Spaceship.png");
  asteroidImg = loadImage("Asteroid.png");
  laserImg = loadImage("laser.png");
  alienSpaceshipImg = loadImage("alienSpaceship.png");
  alienSpaceshipImg2 = loadImage("alienSpaceship2.png");
  //spaceshipSound = loadSound("spaceship.mp3");

  }
  

function setup() {
  createCanvas(1400, 800);

  spaceship = createSprite(400, 600, 20, 10);
  spaceship.addImage("spaceship",spaceshipImg )
  spaceship.scale = 0.6;

  asteroidGroup = new Group();
  alienSpaceshipGroup = new Group(); 



}
function draw(){
  background(bgImg);
  spaceship.velocityY = 10;
  spaceship.x = mouseX
  spaceship.y = mouseY

  
  textSize(50);
  text("Life:" + life, 50, 50);

  spawnAsteroid();
  spawnalienSpaceship();

  if (asteroidGroup.isTouching(spaceship)) {
    for (var i = 0; i < asteroidGroup.length; i++) {
      if (asteroidGroup[i].isTouching(spaceship)) {
        asteroidGroup[i].destroy();
        life= life-1;
        
      }
    }
  }
  if (alienSpaceshipGroup.isTouching(spaceship)) {
    for (var i = 0; i < alienSpaceshipGroup.length; i++) {
      if (alienSpaceshipGroup[i].isTouching(spaceship)) {
        alienSpaceshipGroup[i].destroy();
        life= life-1;
        
      }
    }
  }

  //if(alienSpaceshipGroup.overlap(spaceship)){
    //alienSpaceshipGroup.destroyEach();
  //  life = life - 1;
 // }

  if(life === 0){
    asteroidGroup.setVelocityYEach(0);
    alienSpaceshipGroup.setVelocityYEach(0);
    textSize(100);
    text("GAMEOVER", 700, 400);
  }


  drawSprites();

}

function spawnAsteroid(){
  if (frameCount % 150 === 0){
    var asteroid = createSprite(100,50);
    asteroid.x = Math.round(random(10,850));
    asteroid.addImage("asteroid",asteroidImg);
    asteroid.scale = 0.2;
    asteroid.velocityY =20; 
  //  asteroid.depth = spaceship.depth;
   // spaceship.depth = spaceship.depth + 1;

  }
}
function spawnalienSpaceship(){
  if(frameCount % 150 === 0){
    var alienSpaceship1 = createSprite(100, 10);
    alienSpaceship1.velocityY = 30;
    var rand = Math.round(random(1,2));
    switch(rand){
      case 1 :alienSpaceship1.addImage(alienSpaceshipImg);
      break;
      case 2 : alienSpaceship1.addImage(alienSpaceshipImg2);
      break;
      default: break
    }
    alienSpaceship1.scale = 0.2;
  }
}

