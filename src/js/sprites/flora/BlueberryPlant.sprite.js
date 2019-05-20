import FloraSprite from './FloraSprite.js';
import BLUEBERRY_PLANT_ASSET from '../../../assets/flora/blueberry.png';

class BlueberryPlant extends FloraSprite {
    constructor(scene, x, y, props) {
        super(scene, x, y, 'BLUEBERRY_PLANT', props);
    }
}

BlueberryPlant.ASSETS = [
    {
        type: 'spritesheet',
        key: 'BLUEBERRY_PLANT',
        url: BLUEBERRY_PLANT_ASSET,
        dimensions: {
            frameWidth: 70,
            frameHeight: 74,
        },
    },
];

BlueberryPlant.ANIMATIONS = [
    {
        key: 'BLUEBERRY_PLANT_GROWTH',
        assetKey: 'BLUEBERRY_PLANT',
    },
];

export default BlueberryPlant;