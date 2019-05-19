import FloraSprite from './FloraSprite.js';
import CHERRY_TREE_ASSET from '../../../assets/flora/cherry.png';

class CherryTree extends FloraSprite {
    constructor(scene, x, y, props) {
        super(scene, x, y, 'CHERRY_TREE', props);
    }
}

CherryTree.ASSETS = [
    {
        type: 'spritesheet',
        key: 'CHERRY_TREE',
        url: CHERRY_TREE_ASSET,
        dimensions: {
            frameWidth: 70,
            frameHeight: 74,
        },
    },
];

CherryTree.ANIMATIONS = [
    {
        key: 'CHERRY_TREE_GROWTH',
        assetKey: 'CHERRY_TREE',
    },
];

export default CherryTree;