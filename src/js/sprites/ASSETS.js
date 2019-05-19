import BlankTile from './tiles/BlankTile.sprite.js';
import BareTile from './tiles/BareTile.sprite.js';
import SoilTile from './tiles/SoilTile.sprite.js';

import CherryTree from './trees/CherryTree.sprite.js';
import MagnoliaTree from './trees/MagnoliaTree.sprite.js';
import OakTree from './trees/OakTree.sprite.js';

export default [
    ...BlankTile.ASSETS,
    ...BareTile.ASSETS,
    ...SoilTile.ASSETS,
    ...CherryTree.ASSETS,
    ...MagnoliaTree.ASSETS,
    ...OakTree.ASSETS,
];
