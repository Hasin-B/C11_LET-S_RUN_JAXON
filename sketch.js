var runner, runner_running,  energy_drink, coin, bomb, path, path_invisible, power
function preload(){
  //pre-load images
runner_running= loadAnimation("Runner-1.png, Runner-2.png")
energy_drink= loadImage("energyDrink.png")
coin= loadImage("coin.png")
path= loadImage("path.png")
power= loadImage("power.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path= createSprite(200,200)
  path.addImage("path",pathImg)
  path.velocityY = 4
  path.scale= 1.2
  
  coin = createSprite(200, 10);
  coin.addAnimation("coin", coinImg);
  coin.scale = 0.3;
  coin.velocityY = 8;
  
  runner = createSprite(200,300);
  runner.addAnimation("running", runner_running);
  runner.scale = 0.6;

  bomb = createSprite(200, -100);
  bomb.addAnimation("bomb", bombImg);
  bomb.scale = 0.05;
  bomb.velocityY = 8;
  bomb.tint = rgb(255, 0, 0);
  
  energy_drink = createSprite(200, -2000);
  energy_drink.addAnimation("energy", energyImg);
  energy_drink.scale = 0.05;
  energy_drink.velocityY = 10;
  
}

function draw() {
  background(0);
  background("white");
  if(ground.y >= 470) {
    ground.y = 5;
  }
  runner.x = mouseX;
  
  if(coin.y >= 470) {
    coin.y = random(-7000, -6000);
  }
  if(bomb.y >= 470) {
    bomb.y = random(-1000, -10);
  }
  if(energy_drink.y >= 470) {
    energy_drink.y = random(-10000, -8000);
  }
  if(runner.isTouching(coin)) {
    score+=1;
    coin.y = random(-10000, -1000);
  }
  if(runner.isTouching(bomb)) {
    lifes-=1;
    bomb.y = random(-1000, -10);
  }
  if(runner.isTouching(energy_drink)) {
    lifes+=1;
    energy_drink.y = random(-10000, -8000);
  }
  runner.collide(invisibleGround);
  
  drawSprites();

  textSize = 10;
  fill("white");
  text(score, 130, 20);
  text("Score:", 90, 20)
  text(lifes, 299, 20);
  text("Lifes: ", 265, 20);
  
  if(score >= 8) {
    path.velocityY = 0;
    coin.velocityY = 0;
    bomb.velocityY = 0;
    energy_drink.velocityY = 0;
    runner.pause();
    runner.x = -100;
    runner.y = -100;
    textSize = 100;
    fill("white");
    text("You Won! Reload the page to try again!", 100, 200);
  }
  
  if(lifes <= 0) {
    path.velocityY = 0;
    coin.velocityY = 0;
    bomb.velocityY = 0;
    energy_drink.velocityY = 0;
    runner.pause();
    runner.x = -100;
    runner.y = -100;
    textSize = 100;
    fill("white");
    text("Game Over! Reload the page to try again!", 100, 200);

  
}
}
