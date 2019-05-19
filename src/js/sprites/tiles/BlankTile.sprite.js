import Tile from './Tile.sprite.js';
import BLANK_TILE_ASSET from '../../../assets/tiles/blank.png';

class BlankTile extends Tile {
    constructor(scene, x, y, frame) {
        super(scene, x, y, 'BLANK_TILE', frame);
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
