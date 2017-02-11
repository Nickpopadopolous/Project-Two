var IceCream = function() {};

IceCream.Boot = function() {};

Runner.Boot.prototype = {
	preload: function() {
		this.load.image('logo', '');
		this.load.image('preloadbar', '');
	},
	create: function() {
		this.game.stage.backgroundColor = '#fff';





		this.state.start('preload');

	}
}

