import FloraSprite from './FloraSprite.js';
import SUNFLOWER_PLANT_ASSET from '../../../assets/flora/sunflower.png';

class SunflowerPlant extends FloraSprite {
    constructor(scene, x, y, props, state) {
        super(scene, x, y, 'SUNFLOWER_PLANT', props, state);
    }
}

SunflowerPlant.ASSETS = [
    {
        type: 'spritesheet',
        key: 'SUNFLOWER_PLANT',
        url: SUNFLOWER_PLANT_ASSET,
        dimensions: {
            frameWidth: 70,
            frameHeight: 74,
        },
    },
];

SunflowerPlant.ANIMATIONS = [
    {
        key: 'SUNFLOWER_PLANT_GROWTH',
        assetKey: 'SUNFLOWER_PLANT',
    },
];

export default SunflowerPlant;