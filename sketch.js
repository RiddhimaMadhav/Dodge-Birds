var PLAY = 1;
var END = 0;
var gameState = PLAY;

var sky, skyImg;
var  bird, bird2, birdImg, bird2Img, birdsGroup;
var plane, planeImg;

//var restart, restartImg;
var gameOver, gameOverImg;

var score

function preload(){
   
    skyImg = loadImage("Sky.PNG");
    birdImg = loadImage("bird.png");
    bird2Img = loadImage("bird2.png")
    planeImg = loadImage("plane.png");
    gameOverImg = loadImage("gameover.png");
    //restartImg =  loadImage("restart.PNG")
}

function setup() {
   
  createCanvas(600,300);

  sky = createSprite(0,0,1600,1600)
  sky.addImage(skyImg);
  sky.velocityX = -2

    plane = createSprite(60,100,30,30);
    plane.addImage(planeImg);
    plane.scale = 0.2

    bird = createSprite(190,150,30,30);
    bird.visible = false;

    bird2 = createSprite(200,160,30,30);
    bird2.visible = false;

    gameOver = createSprite(300,100);
    gameOver.addImage(gameOverImg);
    gameOver.scale = 0.6

    // restart = createSprite(300,160);
    // restart.addImage(restartImg);
    // restart.scale = 0.1

  // score = 0;

   birdsGroup = createGroup();

}

function draw() {

  console.log("1")
  background(0)
  
 
  console.log("2")
   
  if(gameState === PLAY){
      gameOver.visible = false;
      restart.visible = false;

      // text("Score : "+ score, 300,160);
      // stroke("red");
    

      // score = score + Math.round(getFrameRate()/80);

      console.log("3")
      console.log("4")
    spawnBirds();
    plane.y = World.mouseY
   
    if (sky.x < 0){
      sky.x = sky.width/2;
    }
    console.log("5")
     if(plane.isTouching(birdsGroup)||plane.isTouching(bird2)){
       gameState = END;
     }
    }

    else if(gameState === END){
      gameOver.visible = true;
      restart.visible = true;
       plane. velocityY = 0;
      // birdsGroup.destroy();
       sky.velocityX = 0;
    
      //   if(keyWentDown('space')) {
      //  restart();
      //  }
      
     }

     function restart(){
      gameState = PLAY;
      gameOver.visible = false;
      
     }

    drawSprites()
      
    }

function spawnBirds () {
var select_sprites = Math.round(random(1,2));

if(frameCount % 80 === 0){
  if (select_sprites == 1){
   bird = createSprite(550,Math.round(random(50,250)),30,30);
   bird.addImage(birdImg);
   bird.scale = 0.1
   bird.velocityX = -3;
   
  } else if(select_sprites == 2){
    bird2 = createSprite(550,Math.round(random(50,250)),30,30);
    bird2.addImage(bird2Img);
    bird2.velocityX = -3;
    bird2.scale = 0.1
  }
  birdsGroup.add(bird,bird2);
} 
}
