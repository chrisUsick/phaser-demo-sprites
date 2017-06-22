
export class Mushroom extends Phaser.Sprite {
  target: Phaser.Point
  body: Phaser.Physics.Arcade.Body
  constructor({ game, x, y, asset, target}) {
    super(game, x, y, asset)

    this.game = game
    this.anchor.setTo(0.5)
    this.target = target

  }
  update() {
    if (this.game.physics.arcade.distanceBetween(this, this.target) >= 50) {
      this.rotation = this.game.physics.arcade.moveToObject(this, this.target, 50)
    } else {
      this.body.velocity = new Phaser.Point(0,0)
      this.body.angularVelocity = 0
    }
  }
}
