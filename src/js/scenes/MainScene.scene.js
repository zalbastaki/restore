import IsoScene from './IsoScene.scene.js';
import ASSETS from '../sprites/ASSETS.js';
import features from './eventHandlers.js';
import Tile from '../sprites/tiles/Tile.sprite.js';
import Tree from '../sprites/trees/Tree.sprite.js';
import BareTile from '../sprites/tiles/BareTile.sprite.js';
import OakTree from '../sprites/trees/OakTree.sprite.js';

const itemToSprite = {
    OakTree,
};

class MainScene extends IsoScene {
    constructor() {
        super({
            key: 'MainScene',
        });
    }

    preload() {
        super.preload();
        ASSETS.forEach(asset => this.load[asset.type](asset.key, asset.url));
    }

    create() {
        super.create();
        
        for (let x = -32; x < 32; x += 1) {
            for (let y = -32; y < 32; y += 1) {
                this.add.existing(new BareTile(this, x * 38, y * 38, this.isoGroup));
            }
        }
    }

    handleEvent(eventName, sprite) {
        if (features[eventName]) {
            features[eventName].forEach(fn => fn.call(this, sprite));
        }

        if (sprite instanceof Tile) {
            const tileEventName = eventName.replace(/^on/, 'onTile');
            if (features[tileEventName]) {
                features[tileEventName].forEach(fn => fn.call(this, sprite));
            }
        }

        if (sprite instanceof Tree) {
            const treeEventName = eventName.replace(/^on/, 'onTree');
            if (features[treeEventName]) {
                features[treeEventName].forEach(fn => fn.call(this, sprite));
            }
        }

        const spriteEventName = eventName.replace(/^on/, 'on' + sprite.constructor.name);
        if (features[spriteEventName]) {
            features[spriteEventName].forEach(fn => fn.call(this, sprite));
        }
    }

    onPurchase(item) {
        const ItemSprite = itemToSprite[item.className];
        this.itemPurchased = new ItemSprite(this, Infinity, Infinity, this.isoGroup);
        this.itemPurchased.alpha = 0.75;
        this.add.existing(this.itemPurchased);
    }
}

export default MainScene;
