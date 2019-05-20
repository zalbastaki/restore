import TileSprite from './TileSprite.js';
import BARE_TILE_ASSET from '../../../assets/tiles/bare.png';

class BareTile extends TileSprite {
    constructor(scene, x, y, props) {
        super(scene, x, y, 'BARE_TILE', props);
    }
}

BareTile.ASSETS = [
    {
        type: 'image',
        key: 'BARE_TILE',
        url: BARE_TILE_ASSET,
    },
];

export default BareTile;