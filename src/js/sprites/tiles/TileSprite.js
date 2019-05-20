import InteractiveIsoSprite from '../InteractiveIsoSprite.js';

class TileSprite extends InteractiveIsoSprite {
    constructor(scene, x, y, key, props) {
        super(scene, x, y, -39, key, undefined);
        this.props = props;
        this.state = {};
    }
}

export default TileSprite;
