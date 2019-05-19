import Tree from './Tree.sprite.js';
import OAK_TREE_ASSET from '../../../assets/trees/oak.png';

class OakTree extends Tree {
    constructor(scene, x, y, frame) {
        super(scene, x, y, 'OAK_TREE', frame);
    }
}

OakTree.ASSETS = [
    {
        type: 'image',
        key: 'OAK_TREE',
        url: OAK_TREE_ASSET,
    },
];

export default OakTree;