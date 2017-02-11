var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

game.state.add('Boot', IceCream.Boot);
game.state.add('preload', IceCream.preload);
game.state.add('mainmenu', IceCream.mainmenu);
game.state.add('Game', IceCream.game);

game.state.start('Boot');