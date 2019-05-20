import IsoScene from './IsoScene.scene.js';
import features from './eventHandlers.js';
import ASSETS from '../sprites/ASSETS.js';
import ANIMATIONS from '../sprites/ANIMATIONS.js';
import BASE_DURATION from '../sprites/ANIMATIONS_BASE_DURATION.js';
import TileSprite from '../sprites/tiles/TileSprite.js';
import FloraSprite from '../sprites/flora/FloraSprite.js';
import {persistGameState, hydrateGameState} from '../storage.js';

class MainScene extends IsoScene {
    constructor() {
        super({
            key: 'MainScene',
        });
        setInterval(() => persistGameState(this), 5000);
    }

    preload() {
        super.preload();
        // load animations
        ASSETS.forEach(asset => this.load[asset.type](asset.key, asset.url, asset.dimensions));
    }
    
    create() {
        super.create();
        // create animations
        ANIMATIONS.forEach(animation => this.anims.create({
            key: animation.key,
            frames: this.anims.generateFrameNumbers(animation.assetKey),
            duration: BASE_DURATION,
        }));
        
        const gameState = hydrateGameState.call(this);
        gameState.sprites.forEach((sprite) => this.add.existing(sprite));
    }

    handleEvent(eventName, sprite) {
        if (features[eventName]) {
            features[eventName].forEach(fn => fn.call(this, sprite));
        }

        if (sprite instanceof TileSprite) {
            const tileEventName = eventName.replace(/^on/, 'onTile');
            if (features[tileEventName]) {
                features[tileEventName].forEach(fn => fn.call(this, sprite));
            }
        }

        if (sprite instanceof FloraSprite) {
            const floraEventName = eventName.replace(/^on/, 'onFlora');
            if (features[floraEventName]) {
                features[floraEventName].forEach(fn => fn.call(this, sprite));
            }
        }

        const spriteEventName = eventName.replace(/^on/, 'on' + sprite.constructor.name);
        if (features[spriteEventName]) {
            features[spriteEventName].forEach(fn => fn.call(this, sprite));
        }
    }

    onAction(actionName, params) {
        if (features[actionName]) {
            features[actionName].forEach(fn => fn.call(this, ...params));
        }
    }
}

export default MainScene;
