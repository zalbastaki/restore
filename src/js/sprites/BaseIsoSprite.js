import { IsoSprite } from 'phaser3-plugin-isometric';

class BaseIsoSprite extends IsoSprite {
    constructor(scene, x, y, z, key, frame) {
        super(scene, x, y, z, key, frame);
        this.type = this.constructor.name;
        this.shouldPersist = true;
    }
}

export default BaseIsoSprite;