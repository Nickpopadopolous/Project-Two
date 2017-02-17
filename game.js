var Phaser = require('./public/libs/phaser.js')

var game = new Phaser.Game(1277, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('sky', 'assets/background_1.png');
    game.load.image('trees', 'assets/treesa.png');
    game.load.image('ground', 'assets/ledge.png');
    game.load.image('cone', 'assets/cone.png');
    game.load.image('dude', 'assets/hero.png', 32, 48);
    game.load.image('enemy', 'assets/monster_right.png');

}

var player;
var platforms;
var cursors;
var enemy;
var enemy1;
var enemy2;
var enemy3;
var enemy4;

var trees;
var cones;
var score = 0;
var scoreText;

function create() {

    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background for our game
    game.add.sprite(0, 0, 'sky');

    //Create Trees for background
    trees = game.add.sprite(0, 150, 'trees');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 25, 'ground');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(3, 3);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    //  Now let's create two ledges
    var ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(30, 250, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(830, 200, 'ground');
    ledge.body.immovable = true;

    // The player and its settings
    player = game.add.sprite(32, game.world.height - 150, 'dude');

    player.scale.setTo(0.6, 0.6);

    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);

    //enemy
    enemy = game.add.sprite(800, game.world.height - 500, 'enemy');
    enemy.scale.setTo(0.6, 0.6);

    game.physics.arcade.enable(enemy);

    enemy.body.bounce.y = 0.2;
    enemy.body.gravity.y = 300;
    enemy.body.collideWorldBounds = true;

    //var tween = game.add.tween(enemy).to( { x: 300 }, 20000, Phaser.Easing.Linear.None, true, 0, 1000, true);

    //enemy1
    enemy1 = game.add.sprite(500, game.world.height - 500, 'enemy');
    enemy1.scale.setTo(0.6, 0.6);

    game.physics.arcade.enable(enemy1);

    enemy1.body.bounce.y = 0.2;
    enemy1.body.gravity.y = 300;
    enemy1.body.collideWorldBounds = true;

    //var tween = game.add.tween(enemy1).to( { x: 300 }, 20000, Phaser.Easing.Linear.None, true, 0, 1000, true);

    //enemy2
    enemy2 = game.add.sprite(200, game.world.height - 300, 'enemy');
    enemy2.scale.setTo(0.6, 0.6);

    game.physics.arcade.enable(enemy2);

    enemy2.body.bounce.y = 0.2;
    enemy2.body.gravity.y = 300;
    enemy2.body.collideWorldBounds = true;

    //var tween = game.add.tween(enemy2).to( { x: 300 }, 20000, Phaser.Easing.Linear.None, true, 0, 1000, true);

     //enemy3
    enemy3 = game.add.sprite(600, game.world.height - 200, 'enemy');
    enemy3.scale.setTo(0.6, 0.6);

    game.physics.arcade.enable(enemy3);

    enemy3.body.bounce.y = 0.2;
    enemy3.body.gravity.y = 300;
    enemy3.body.collideWorldBounds = true;

    //var tween = game.add.tween(enemy3).to( { x: 300 }, 20000, Phaser.Easing.Linear.None, true, 0, 1000, true);

     //enemy4
    enemy4 = game.add.sprite(100, game.world.height - 500, 'enemy');
    enemy4.scale.setTo(0.6, 0.6);

    game.physics.arcade.enable(enemy4);

    enemy4.body.bounce.y = 0.2;
    enemy4.body.gravity.y = 300;
    enemy4.body.collideWorldBounds = true;

    //var tween = game.add.tween(enemy4).to( { x: 300 }, 20000, Phaser.Easing.Linear.None, true, 0, 1000, true);
    

    //  Finally some stars to collect
    cones = game.add.group();

    //  We will enable physics for any star that is created in this group
    cones.enableBody = true;

    cones.physicsBodyType = Phaser.Physics.ARCADE;

    //  Here we'll create 12 of them evenly spaced apart
    for (var i = 0; i < 30; i++)
    {
        //  Create a star inside of the 'stars' group
        var cone = cones.create(i * 70, 0, 'cone');

        cone.body.gravity.y = 300;

        //  This just gives each star a slightly random bounce value
        cone.body.bounce.setTo(0.9, 0.9);


        cone.body.collideWorldBounds=true;
        cone.body.gravity.x = game.rnd.integerInRange(-80, 80);
        cone.body.gravity.y = 0 + Math.random() * 100;        
    }

    //  The score
    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    //  Our controls.
    cursors = game.input.keyboard.createCursorKeys();
    
}

function update() {

    //  Collide the player and the stars with the platforms
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(cones, platforms);
//=================================================//
    game.physics.arcade.collide(enemy, platforms);
    game.physics.arcade.collide(enemy, player);
    game.physics.arcade.collide(enemy, cones);
    // game.physics.arcade.collide(enemy, enemy1);
    // game.physics.arcade.collide(enemy, enemy2);
    // game.physics.arcade.collide(enemy, enemy3);
    // game.physics.arcade.collide(enemy, enemy4);
//=================================================//
    game.physics.arcade.collide(enemy1, platforms);
    game.physics.arcade.collide(enemy1, player);
    game.physics.arcade.collide(enemy1, cones);
    //game.physics.arcade.collide(enemy1, enemy);
    // game.physics.arcade.collide(enemy1, enemy2);
    // game.physics.arcade.collide(enemy1, enemy3);
    // game.physics.arcade.collide(enemy1, enemy4);
//=================================================//
    game.physics.arcade.collide(enemy2, platforms);
    game.physics.arcade.collide(enemy2, player);
    game.physics.arcade.collide(enemy2, cones);
    //game.physics.arcade.collide(enemy2, enemy);
    //game.physics.arcade.collide(enemy2, enemy1);
    // game.physics.arcade.collide(enemy2, enemy3);
    // game.physics.arcade.collide(enemy2, enemy4);
//=================================================//
    game.physics.arcade.collide(enemy3, platforms);
    game.physics.arcade.collide(enemy3, player);
    game.physics.arcade.collide(enemy3, cones);
    //game.physics.arcade.collide(enemy3, enemy);
    //game.physics.arcade.collide(enemy3, enemy1);
    //game.physics.arcade.collide(enemy3, enemy2);
    //game.physics.arcade.collide(enemy3, enemy4);
//=================================================//
    game.physics.arcade.collide(enemy4, platforms);
    game.physics.arcade.collide(enemy4, player);
    game.physics.arcade.collide(enemy4, cones);
    //game.physics.arcade.collide(enemy4, enemy);
    //game.physics.arcade.collide(enemy4, enemy1);
    //game.physics.arcade.collide(enemy4, enemy2);
    //game.physics.arcade.collide(enemy4, enemy3);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    game.physics.arcade.overlap(player, cones, collectStar, null, this);

    //  Reset the players velocity (movement)
    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 4;
    }
    
    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -350;
    }

}

function collectStar (player, cone) {
    
    // Removes the star from the screen
    cone.kill();

    //  Add and update the score
    score += 10;
    scoreText.text = 'Score: ' + score;

}