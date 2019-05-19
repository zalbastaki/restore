import BlankTile from './tiles/BlankTile.sprite.js';
import BareTile from './tiles/BareTile.sprite.js';
import SoilTile from './tiles/SoilTile.sprite.js';
import MagnoliaTree from './flora/MagnoliaTree.sprite.js';
import CherryTree from './flora/CherryTree.sprite.js';
import OakTree from './flora/OakTree.sprite.js';
import TomatoPlant from './flora/TomatoPlant.sprite.js';

export default [
    ...BlankTile.ASSETS,
    ...BareTile.ASSETS,
    ...SoilTile.ASSETS,
    ...MagnoliaTree.ASSETS,
    ...CherryTree.ASSETS,
    ...OakTree.ASSETS,
    ...TomatoPlant.ASSETS,
];
