import FloraSprite from './FloraSprite.js';
import SWEETPEA_PLANT_ASSET from '../../../assets/flora/sweetpea.png';

class SweetPeaPlant extends FloraSprite {
    constructor(scene, x, y, props) {
        super(scene, x, y, 'SWEETPEA_PLANT', props);
    }
}

SweetPeaPlant.ASSETS = [
    {
        type: 'spritesheet',
        key: 'SWEETPEA_PLANT',
        url: SWEETPEA_PLANT_ASSET,
        dimensions: {
            frameWidth: 70,
            frameHeight: 74,
        },
    },
];

SweetPeaPlant.ANIMATIONS = [
    {
        key: 'SWEETPEA_PLANT_GROWTH',
        assetKey: 'SWEETPEA_PLANT',
    },
];

export default SweetPeaPlant;