import FloraSprite from './FloraSprite.js';
import STRAWBERRY_PLANT_ASSET from '../../../assets/flora/strawberry.png';

class StrawberryPlant extends FloraSprite {
    constructor(scene, x, y, props, state) {
        super(scene, x, y, 'STRAWBERRY_PLANT', props, state);
    }
}

StrawberryPlant.ASSETS = [
    {
        type: 'spritesheet',
        key: 'STRAWBERRY_PLANT',
        url: STRAWBERRY_PLANT_ASSET,
        dimensions: {
            frameWidth: 70,
            frameHeight: 74,
        },
    },
];

StrawberryPlant.ANIMATIONS = [
    {
        key: 'STRAWBERRY_PLANT_GROWTH',
        assetKey: 'STRAWBERRY_PLANT',
    },
];

export default StrawberryPlant;