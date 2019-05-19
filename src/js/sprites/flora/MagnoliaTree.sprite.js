import FloraSprite from './FloraSprite.js';
import MAGNOLIA_TREE_ASSET from '../../../assets/flora/magnolia.png';

class MagnoliaTree extends FloraSprite {
    constructor(scene, x, y, props) {
        super(scene, x, y, 'MAGNOLIA_TREE', props);
    }
}

MagnoliaTree.ASSETS = [
    {
        type: 'image',
        key: 'MAGNOLIA_TREE',
        url: MAGNOLIA_TREE_ASSET,
    },
];

export default MagnoliaTree;