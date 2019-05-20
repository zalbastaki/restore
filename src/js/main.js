import Phaser from 'phaser';
import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import MainScene from './scenes/MainScene.scene.js';
import CATEGORIES from './CATEGORIES.js';
import CoinDisplay from './components/CoinDisplay.component.js';
import OffsetDisplay from './components/OffsetDisplay.component.js';
import InspectFlora from './components/InspectFlora.component.js';
import MarketButton from './components/MarketButton.component.js';
import Market from './components/Market.component.js';
import Music from './components/Music.component.js';

const guiDiv = document.getElementById('gui');
const gameDiv = document.getElementById('game');

class GUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coins: 10,
            offset: 0,
            marketOpen: false,
            inspectFlora: null,
        }
    }

    componentDidMount() {
        this.game = new Phaser.Game({
            type: Phaser.AUTO,
            parent: gameDiv,
            scale: {
                mode: Phaser.Scale.NONE,
                width: window.innerWidth,
                height: window.innerHeight,
            },
            pixelArt: true,
            scene: MainScene,
        });
        window.addEventListener('resize', this.onResize.bind(this));
        // guiDiv.addEventListener('mousedown', (event) => event.stopPropagation() || false);
        // guiDiv.addEventListener('mouseup', (event) => event.stopPropagation() || false);
        // guiDiv.addEventListener('touchstart', (event) => event.stopPropagation() || false);
        // guiDiv.addEventListener('touchend', (event) => event.stopPropagation() || false);
    }

    setState(updater, callback) {
        super.setState(updater, (...args) => {
            const scene = this.game.scene.keys.MainScene;
            scene.state = this.state;
            scene.setState = this.setState.bind(this);

            if (callback) {
                callback(...args);
            }
        });
    }

    onResize(event) {
        this.game.scale.resize(window.innerWidth, window.innerHeight);
    }

    onReactAction(actionName, ...params) {
        const scene = this.game.scene.keys.MainScene;
        scene.onAction.call(scene, actionName, params);
    }

    render(props) {
        const {
            coins,
            offset,
            marketOpen,
            inspectFlora,
        } = this.state;
        return (
            <Fragment>
                <CoinDisplay value={coins} />
                <OffsetDisplay value={offset} />
                <Music />
                <InspectFlora value={inspectFlora} />
                <MarketButton onClick={() => this.setState({ marketOpen: !marketOpen })} />
                <Market
                    categories={CATEGORIES}
                    open={marketOpen}
                    coins={coins}
                    onPurchaseFlora={(item) => {
                        this.setState({
                            coins: coins - item.price,
                            marketOpen: false,
                        });
                        this.onReactAction('onPurchaseFlora', item);
                    }}
                />
            </Fragment>
        );
    }
}
    
ReactDOM.render(
    <GUI />,
    guiDiv,
);
