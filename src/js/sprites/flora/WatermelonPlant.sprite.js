import FloraSprite from './FloraSprite.js';
import WATERMELON_PLANT_ASSET from '../../../assets/flora/watermelon.png';

class WatermelonPlant extends FloraSprite {
    constructor(scene, x, y, props) {
        super(scene, x, y, 'WATERMELON_PLANT', props);
    }
}

WatermelonPlant.ASSETS = [
    {
        type: 'spritesheet',
        key: 'WATERMELON_PLANT',
        url: WATERMELON_PLANT_ASSET,
        dimensions: {
            frameWidth: 70,
            frameHeight: 74,
        },
    },
];

WatermelonPlant.ANIMATIONS = [
    {
        key: 'WATERMELON_PLANT_GROWTH',
        assetKey: 'WATERMELON_PLANT',
    },
];

export default WatermelonPlant;