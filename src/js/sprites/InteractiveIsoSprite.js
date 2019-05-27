import BaseIsoSprite from './BaseIsoSprite.js';

class InteractiveIsoSprite extends BaseIsoSprite {
    constructor(scene, x, y, z, key, props, state) {
        super(scene, x, y, z, key, props, state);

        this.setInteractive();

        this.on('pointerover', this.onPointerOver, this);
        this.on('pointerout', this.onPointerOut, this);
        this.on('pointerdown', this.onPointerDown, this);
    }

    onPointerOver() {
        this.scene.handleEvent.call(this.scene, 'onPointerOver', this); 
    }

    onPointerOut() {
        this.scene.handleEvent.call(this.scene, 'onPointerOut', this);
    }

    onPointerDown() {
        this.scene.handleEvent.call(this.scene, 'onPointerDown', this);
    }
}

export default InteractiveIsoSprite;
