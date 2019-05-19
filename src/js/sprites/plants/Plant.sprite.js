import { IsoSprite } from 'phaser3-plugin-isometric';

class Plant extends IsoSprite {
    constructor(scene, x, y, key, frame) {
        super(scene, x, y, 0, key, frame);
    }
}

export default Plant;