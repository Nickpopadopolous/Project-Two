IceCream.MainMenu = function() {};

IceCream.MainMenu.prototype = {
  create: function() {
    this.background = this.game.add.tileSprite(0, 0, this.game.width, 512, 'background');
    this.background.autoScroll(-100, 0);

    this.foreground = this.game.add.tileSprite(0, 470, this.game.width, this.game.height - 533, 'foreground');
    this.foreground.autoScroll(-100,0);

    this.ground = this.game.add.tileSprite(0, this.game.height - 73, this.game.width, 73, 'ground');
    this.ground.autoScroll(-400, 0);

    this.player = this.add.sprite(200, this.game.height/2, 'player');
    this.player.anchor.setTo(0.5);
    this.player.scale.setTo(0.3);

    this.player.animations.add('fly', [0,1,2,3,2,1]);
    this.player.animations.play('fly', 8, true);

    this.game.add.tween(this.player).to({y: this.player.y - 16}, 500, Phaser.Easing.Linear.NONE, true, 0, Infinity, true);

    this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.splash.anchor.setTo(0.5);


    this.startText = this.game.add.bitmapText(0,0, 'minecraftia', 'tap to start', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 2 + this.splash.height / 2;

  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('Game');
    }
  }
};