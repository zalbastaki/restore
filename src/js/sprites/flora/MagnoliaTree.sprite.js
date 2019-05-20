import FloraSprite from './FloraSprite.js';
import MAGNOLIA_TREE_ASSET from '../../../assets/flora/magnolia.png';

class MagnoliaTree extends FloraSprite {
    constructor(scene, x, y, props) {
        super(scene, x, y, 'MAGNOLIA_TREE', props);
    }
}

MagnoliaTree.ASSETS = [
    {
        type: 'spritesheet',
        key: 'MAGNOLIA_TREE',
        url: MAGNOLIA_TREE_ASSET,
        dimensions: {
            frameWidth: 70,
            frameHeight: 74,
        },
    },
];

MagnoliaTree.ANIMATIONS = [
    {
        key: 'MAGNOLIA_TREE_GROWTH',
        assetKey: 'MAGNOLIA_TREE',
    },
];

export default MagnoliaTree;