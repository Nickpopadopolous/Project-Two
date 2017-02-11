IceCream.Preload = function() {
    this.ready = false;
};

IceCream.Preload.prototype = {

}
    preload: function() {

        // preload bar

        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
        this.preloadBar.anchor.setTo(0.5);

        this.load.setPreloadSprite(this.preloadBar);

        // load images

        this.load.image('ground', '');
        this.load.image('background', '');
        this.load.image('foreground', '');

        // load sprites

        this.load.spritesheet('iceCream', 'assets/images/coins-ps.png', 51, 51, 7);
        this.load.spritesheet('ben', '', 229, 296, 4);
        this.load.spritesheet('jerry', '', 361, 218, 4);

        // load sounds

        this.load.audio('gameMusic', ['']);


        this.load.onLoadComplete.add(this.onLoadComplete, this);

    },

    create: function() {

        this.preloadBar.cropEnabled = false;
    },

    update: function() {

    this.state.start('MainMenu');

    },

    onLoadComplete: function() {

        this.ready = true;
    }
