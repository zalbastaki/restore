import InteractiveIsoSprite from '../InteractiveIsoSprite.js';

class TileSprite extends InteractiveIsoSprite {
    constructor(scene, x, y, key, props, state) {
        super(scene, x, y, -39, key, props, state);
    }
}

export default TileSprite;
