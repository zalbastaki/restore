import TileSprite from './TileSprite.js';
import BLANK_TILE_ASSET from '../../../assets/tiles/blank.png';

class BlankTile extends TileSprite {
    constructor(scene, x, y, props, state) {
        super(scene, x, y, 'BLANK_TILE', props, state);
    }
}

BlankTile.ASSETS = [
    {
        type: 'image',
        key: 'BLANK_TILE',
        url: BLANK_TILE_ASSET,
    },
];

export default BlankTile;
