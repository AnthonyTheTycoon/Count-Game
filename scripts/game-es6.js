// Logic for the Count Game

class Game {
  constructor() {
    console.log('Welcome to the game. Version ${this.version()}'};

    this.canvas = document.getElementById("game-canvas");
    this.stage = new createjs.Stage(this.canvas);

    createjs.Ticker.setFPS(60);

    // Keep re-drawing the stage
    createjs.Ticker.on("tick", this.stage);

    // Testing code
    var circle = new creatjs.Shape();
    circle.graphics.beginFill("red").drawnCircle(0,0,40);
    circle.x = circle.y = 100;
    this.stage.addChild(circle);
  }
  version(){
    return '1.0.0';
  }
}

// Start the Game
var game = new Game();
