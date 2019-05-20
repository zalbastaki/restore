import FloraSprite from './sprites/flora/FloraSprite.js';
import BareTile from './sprites/tiles/BareTile.sprite.js';
import BlankTile from './sprites/tiles/BlankTile.sprite.js';
import SoilTile from './sprites/tiles/SoilTile.sprite.js';
import BlueberryPlant from './sprites/flora/BlueberryPlant.sprite.js';
import CatnipPlant from './sprites/flora/CatnipPlant.sprite.js';
import CherryTree from './sprites/flora/CherryTree.sprite.js';
import MagnoliaTree from './sprites/flora/MagnoliaTree.sprite.js';
import OakTree from './sprites/flora/OakTree.sprite.js';
import StrawberryPlant from './sprites/flora/StrawberryPlant.sprite.js';
import SunflowerPlant from './sprites/flora/SunflowerPlant.sprite.js';
import SweetPeaPlant from './sprites/flora/SweetPeaPlant.sprite.js';
import TomatoPlant from './sprites/flora/TomatoPlant.sprite.js';
import WatermelonPlant from './sprites/flora/WatermelonPlant.sprite.js';

const SAVE_ENABLED = true;

function getDefaultGuiState() {
    return {
        coins: 1000,
        //coins: 10,
        offset: 0,
    };
}

function getDefaultGameState() {
    const sprites = [];
    for (let x = -32; x < 32; x += 1) {
        for (let y = -32; y < 32; y += 1) {
            sprites.push(new BareTile(this, x * 38, y * 38));
        }
    }
    return {
        sprites,
    };
}

function hydrateGuiState() {
    const guiState = SAVE_ENABLED && localStorage.getItem('guiState');
    return guiState
        ? JSON.parse(guiState)
        : getDefaultGuiState();
}

function persistGuiState(state) {
    if (SAVE_ENABLED) {
        localStorage.setItem('guiState', JSON.stringify({
            coins: state.coins,
            offset: state.offset,
        }))
    }
}

function deserializeGameState(state) {
    return {
        sprites: state.sprites.map((sprite) => {
            const ItemSprite = {
                BareTile,
                BlankTile,
                SoilTile,
                BlueberryPlant,
                CatnipPlant,
                CherryTree,
                MagnoliaTree,
                OakTree,
                StrawberryPlant,
                SunflowerPlant,
                SweetPeaPlant,
                TomatoPlant,
                WatermelonPlant,
            }[sprite.type];
            const result = new ItemSprite(this, sprite.isoX, sprite.isoY, sprite.props);
            result.state = sprite.state;
            if (result instanceof FloraSprite) {
                result.growthAnimation(result.getGrowthProgress());
            }
            return result;
        }),
    };
}

function hydrateGameState() {
    const gameState = SAVE_ENABLED && localStorage.getItem('gameState');
    return gameState
        ? deserializeGameState.call(this, JSON.parse(gameState))
        : getDefaultGameState.call(this);
}

function persistGameState(scene) {
    if (SAVE_ENABLED && scene.children.list.length > 0) {
        localStorage.setItem('gameState', JSON.stringify({
            sprites: scene.children.list
                // HACK: We don't want to save the plant in the player's hand.
                .filter(sprite => sprite.alpha === 1)
                .map((sprite) => ({
                    type: sprite.type,
                    isoX: sprite.isoX,
                    isoY: sprite.isoY,
                    props: sprite.props,
                    state: sprite.state,
                })),
        }));
    }
}

export {
    hydrateGuiState,
    persistGuiState,
    hydrateGameState,
    persistGameState,
}