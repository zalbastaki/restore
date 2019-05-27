import { IsoSprite } from 'phaser3-plugin-isometric';

class BaseIsoSprite extends IsoSprite {
    constructor(scene, x, y, z, key, props, state = {}) {
        super(scene, x, y, z, key, undefined);
        this.props = props;
        this.state = state;
        this.type = this.constructor.name;
        this.shouldPersist = true;
    }
}

export default BaseIsoSprite;