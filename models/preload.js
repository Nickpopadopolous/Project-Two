IceCream.Preload = function() {
  this.ready = false;
};

IceCream.Preload.prototype = {
  preload: function() {

    this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.splash.anchor.setTo(0.5);

    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

    this.load.image('ground', 'assets/images/ground.png');
    this.load.image('background', 'assets/images/background_2.png');
    this.load.image('foreground', 'assets/images/foreground.png');

    this.load.spritesheet('coins', 'assets/images/coins-ps.png', 51, 51, 7);
    this.load.spritesheet('player', 'assets/images/jetpack-ps.png', 229, 296, 4);
    this.load.spritesheet('missile', 'assets/images/missiles-ps.png', 361, 218, 4);




    this.load.bitmapFont('minecraftia', 'assets/fonts/minecraftia/minecraftia.png', 'assets/fonts/minecraftia/minecraftia.xml');

    this.load.onLoadComplete.add(this.onLoadComplete, this);
  },
  create: function() {
    this.preloadBar.cropEnabled = false;
  }, 
  update: function() {
    if(this.cache.isSoundDecoded('gameMusic') && this.ready === true) {
      this.state.start('MainMenu');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};