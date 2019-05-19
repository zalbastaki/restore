import { IsoSprite } from 'phaser3-plugin-isometric';

class Tile extends IsoSprite {
    constructor(scene, x, y, key, frame) {
        super(scene, x, y, -39, key, frame);

        this.setInteractive();

        this.on('pointerover', this.onHover, this);
        this.on('pointerout', this.onHoverOut, this);
        this.on('pointerdown', this.onClick, this);
    }

    onHover() {
        this.scene.handleEvent.call(this.scene, 'onHover', this); 
    }

    onHoverOut() {
        this.scene.handleEvent.call(this.scene, 'onHoverOut', this);
    }

    onClick() {
        this.scene.handleEvent.call(this.scene, 'onClick', this);
    }
}

export default Tile;
