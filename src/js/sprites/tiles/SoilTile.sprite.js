import Tile from './Tile.sprite.js';
import SOIL_TILE_ASSET from '../../../assets/tiles/soil.png';

class SoilTile extends Tile {
    constructor(scene, x, y, frame) {
        super(scene, x, y, 'SOIL_TILE', frame);
    }
}

SoilTile.ASSETS = [
    {
        type: 'image',
        key: 'SOIL_TILE',
        url: SOIL_TILE_ASSET,
    },
];

export default SoilTile;
