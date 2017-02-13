// declare (gamename).Preloader passing in our game object

IceCream.Preloader = function() {

    // preload bar set to null

    this.preloadBar = null;

    // title text set to null

    this.titleText = null;

    // boolean to determine if everything is pre-loaded and ready to run or not

    this.ready = false;
};

// spec out all of our different Phaser functions for our pre-loader

IceCream.Preloader.prototype = {

    // preload function

    preload: function () {

        // reference the preload bar that we created
        // this.world refers to the game world center point
        // reference preloader bar, which we defined over in Boot.js inside of the preload function

        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloadBar');

        // set a preload sprite onto our load attribute
        // pass in the reference to our preload bar.

        this.load.setPreloadSprite(this.preloadBar);

        // title text
        // reference title image, which we defined over in Boot.js inside of the preload function

        this.titleText = this.add.image(this.world.centerX, this.world.centerY, 'titleimage');

        // Set the anchor to 0.5 and 0.5.
        // This sets the transform point with an anchor point to the center of the object.

        this.titleText.anchor.setTo(0.5, 0.5);

        // load images

        this.load.image('ground', '');
        this.load.image('background', '');

        // load sprites

        this.load.spritesheet('iceCream', '.png', 51, 51, 7);
        this.load.spritesheet('ben', '.png', 229, 296, 4);
        this.load.spritesheet('jerry', '.png', 361, 218, 4);

        // load sounds

        this.load.audio('gameMusic', ['']);

    },

    // create function. The create function fires off once everything is happened in the preload function

    create: function () {

        this.preloadBar.cropEnabled = false;
    },

    // update function. This function will constantly run after the create function has occurred

    update: function () {

        this.ready = true;

    };
};



