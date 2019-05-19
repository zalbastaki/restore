import { IsoSprite } from 'phaser3-plugin-isometric';

class Tree extends IsoSprite {
    constructor(scene, x, y, key, frame) {
        super(scene, x, y, 0, key, frame);
    }
}

export default Tree;