import Tile from './Tile.sprite.js';
import BARE_TILE_ASSET from '../../../assets/tiles/bare.png';

class BareTile extends Tile {
    constructor(scene, x, y, frame) {
        super(scene, x, y, 'BARE_TILE', frame);
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