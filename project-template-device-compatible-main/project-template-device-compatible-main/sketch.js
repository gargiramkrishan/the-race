var cash,cashh1,runner1,runnner2,road,road2,cash2,cashh2,cash3,cashh3


var obstacle,rand;


var score,Play,End,Game;



function preload()
{
  runnner2 = loadAnimation("Runner-1.png","Runner-2.png")
  road2 = loadImage("Road.png")
  cashh1 = loadImage("cash.png")
  cashh2 = loadImage("sword.png")
  cashh3 = loadImage("jwell.png")
  score = 0;
  Play = 1;
  End = 0;
  Game = Play;
}

function setup()
{
  createCanvas(windowWidth,windowHeight)
  road = createSprite(960,8777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777770)
  cash = createSprite(960,8777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777770)
  runner1 = createSprite(960,25666666666666666666666666666666666666666666666666444444444444444444444444444444444444444440)
  obstacle = new Group()
  console.log(width)
  console.log(height)
}


function draw()
{
  background("black")
  if(Game == Play)
  {
    run()
    iamthecoder()
    road.velocityY = 10
    cash.velocityY = 10
    runner1.x = World.mouseX;
    if(obstacle.isTouching(runner1))
    {
      score = score + 1
      cash.destroy()
    }
  }
  drawSprites()
  text("Score" + score,960,300)
}

function run()
{
  if(frameCount%90==0)
  {
    road = createSprite(width/2,height,width,2)
    road.addImage("gkgerrrrrrry",road2)
    road.velocityY = -10
    runner1 = createSprite(width/2,600)
    runner1.addAnimation("gkgy",runnner2)
    runner1.scale = 0.1
  }
}
function iamthecoder()
{
  if(frameCount%90==0)
  {
    cash = createSprite(width/2,height,width,2)
    cash.x = Math.round(random(100,900))
    cash.y = Math.round(random(100,600))
    rand = Math.round(random(1,3))
    cash.scale = 0.4
    switch(rand)
    {
      case 1 : cash.addImage(cashh1)
      break
      case 2 : cash.addImage(cashh2)
      break
      case 3 : cash.addImage(cashh3)
      break
      default:
        break
    }
    obstacle.add(cash)
  }
}