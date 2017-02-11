var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

game.state.add('Boot', Runner.Boot);
game.state.add('Preloader', Runner.Preload);
game.state.add('MainMenu', Runner.MainMenu);
game.state.add('Game', Runner.Game);

game.state.start('Boot');