import InteractiveIsoSprite from '../InteractiveIsoSprite.js';

class TileSprite extends InteractiveIsoSprite {
    constructor(scene, x, y, key, frame) {
        super(scene, x, y, -39, key, frame);
    }
}

export default TileSprite;
