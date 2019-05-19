import Tree from './Tree.sprite.js';
import CHERRY_TREE_ASSET from '../../../assets/trees/cherry.png';

class CherryTree extends Tree {
    constructor(scene, x, y, frame) {
        super(scene, x, y, 'CHERRY_TREE', frame);
    }
}

CherryTree.ASSETS = [
    {
        type: 'image',
        key: 'CHERRY_TREE',
        url: CHERRY_TREE_ASSET,
    },
];

export default CherryTree;