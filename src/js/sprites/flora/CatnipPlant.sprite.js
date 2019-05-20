import FloraSprite from './FloraSprite.js';
import CATNIP_PLANT_ASSET from '../../../assets/flora/catnip.png';

class CatnipPlant extends FloraSprite {
    constructor(scene, x, y, props) {
        super(scene, x, y, 'CATNIP_PLANT', props);
    }
}

CatnipPlant.ASSETS = [
    {
        type: 'spritesheet',
        key: 'CATNIP_PLANT',
        url: CATNIP_PLANT_ASSET,
        dimensions: {
            frameWidth: 70,
            frameHeight: 74,
        },
    },
];

CatnipPlant.ANIMATIONS = [
    {
        key: 'CATNIP_PLANT_GROWTH',
        assetKey: 'CATNIP_PLANT',
    },
];

export default CatnipPlant;