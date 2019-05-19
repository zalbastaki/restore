import FloraSprite from './FloraSprite.js';
import OAK_TREE_ASSET from '../../../assets/flora/oak.png';

class OakTree extends FloraSprite {
    constructor(scene, x, y, props) {
        super(scene, x, y, 'OAK_TREE', props);
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