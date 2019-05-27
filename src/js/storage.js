import FloraSprite from './sprites/flora/FloraSprite.js';
import BareTile from './sprites/tiles/BareTile.sprite.js';
import spriteFactory from './sprites/spriteFactory.js';

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
            const ItemSprite = spriteFactory[sprite.type];
            const result = new ItemSprite(this, sprite.isoX, sprite.isoY, sprite.props, sprite.state);
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
                .filter(sprite => sprite.shouldPersist)
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