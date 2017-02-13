var IceCream = function(game, x , y, key, frame) {
	key = 'iceCreams';
	Phaser.Sprite.call(this, game, x, y, key, frame);

	this.scale.setTo(0.6);
	this.anchor.setTo(0.6);

	this.animations.add('spin');

	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = false;
	this.checkWorldBounds = true;
	this.onOutOfBoundsKill = true;

	this.events.onKill.add(this.onKill, this);
	this.events.onRevive.add(this.onRevive, this);
};

IceCream.prototype = Object.create(Phaser.Sprite.prototype);
iceCream.prototype.constructor = iceCream;

IceCream.prototype.onRevive = function() {
	this.body.velocity.x = -300;
	this.animations.play('spin', 10, true);
};

IceCream.prototype.onKill = function() {
	this.animations.frame = 0;
}