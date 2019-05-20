import FloraSprite from './FloraSprite.js';
import OAK_TREE_ASSET from '../../../assets/flora/oak.png';

class OakTree extends FloraSprite {
    constructor(scene, x, y, props) {
        super(scene, x, y, 'OAK_TREE', props);
    }
}

OakTree.ASSETS = [
    {
        type: 'spritesheet',
        key: 'OAK_TREE',
        url: OAK_TREE_ASSET,
        dimensions: {
            frameWidth: 70,
            frameHeight: 74,
        },
    },
];

OakTree.ANIMATIONS = [
    {
        key: 'OAK_TREE_GROWTH',
        assetKey: 'OAK_TREE',
    },
];

export default OakTree;