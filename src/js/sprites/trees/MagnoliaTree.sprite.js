import Tree from './Tree.sprite.js';
import MAGNOLIA_TREE_ASSET from '../../../assets/trees/magnolia.png';

class MagnoliaTree extends Tree {
    constructor(scene, x, y, frame) {
        super(scene, x, y, 'MAGNOLIA_TREE', frame);
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