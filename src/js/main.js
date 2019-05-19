import Phaser from 'phaser';
import React from 'react';
import ReactDOM from 'react-dom';
import MainScene from './scenes/MainScene.scene.js';
import GUI from './gui/GUI.js';
import CATEGORIES from './CATEGORIES.js';

const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent: document.getElementById('game'),
    scale: {
        mode: Phaser.Scale.NONE,
        width: window.innerWidth,
        height: window.innerHeight,
    },
    pixelArt: true,
    scene: MainScene,
});


ReactDOM.render(
    <GUI
        categories={CATEGORIES}
        onPurchase={(item) => {
            const scene = game.scene.keys.MainScene;
            scene.onPurchase.call(scene, item);
        }}
    />,
    document.getElementById('gui')
);

window.addEventListener('resize', function (event) {
    game.scale.resize(window.innerWidth, window.innerHeight);
});
