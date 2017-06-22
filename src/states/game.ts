import {Mushroom} from '../sprites/mushroom'
import {setResponsiveWidth} from '../utils'

export class GameState extends Phaser.State {

  init () {}
  preload () {}

  create () {
    let banner = this.add.text(this.game.world.centerX, this.game.height - 30, 'Phaser + ES6 + Webpack', {})
    banner.font = 'Nunito'
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.anchor.setTo(0.5)

    this.addSprite(new Phaser.Point(500,500));
  }

  render () {
  }

  update() {
    if (this.game.input.mousePointer.justPressed(30)) {
      this.addSprite(this.game.input.mousePointer.position);
    }
  }

  addSprite(position: Phaser.Point) {
    const mushroom = new Mushroom({
      game: this.game,
      x: position.x,
      y: position.y,
      asset: 'mushroom',
      target: new Phaser.Point(500,500)
    })
    // set the sprite width to 30% of the game width
    setResponsiveWidth(mushroom, 30, this.game.world)
    this.game.add.existing(mushroom)
    this.game.physics.enable(mushroom, Phaser.Physics.ARCADE)
  }
}
