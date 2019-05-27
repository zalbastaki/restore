import TileSprite from './TileSprite.js';
import SOIL_TILE_ASSET from '../../../assets/tiles/soil.png';

class SoilTile extends TileSprite {
    constructor(scene, x, y, props, state) {
        super(scene, x, y, 'SOIL_TILE', props, state);
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
