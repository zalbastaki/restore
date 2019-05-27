import FloraSprite from './FloraSprite.js';
import TOMATO_PLANT_ASSET from '../../../assets/flora/tomato.png';

class TomatoPlant extends FloraSprite {
    constructor(scene, x, y, props, state) {
        super(scene, x, y, 'TOMATO_PLANT', props, state);
    }
}

TomatoPlant.ASSETS = [
    {
        type: 'spritesheet',
        key: 'TOMATO_PLANT',
        url: TOMATO_PLANT_ASSET,
        dimensions: {
            frameWidth: 70,
            frameHeight: 74,
        },
    },
];

TomatoPlant.ANIMATIONS = [
    {
        key: 'TOMATO_PLANT_GROWTH',
        assetKey: 'TOMATO_PLANT',
    },
];

export default TomatoPlant;