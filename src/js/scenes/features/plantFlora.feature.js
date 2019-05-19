import FLORA from '../../FLORA.js';
import MagnoliaTree from '../../sprites/flora/MagnoliaTree.sprite.js';
import CherryTree from '../../sprites/flora/CherryTree.sprite.js';
import OakTree from '../../sprites/flora/OakTree.sprite.js';
import TomatoPlant from '../../sprites/flora/TomatoPlant.sprite.js';

const floraSprite = {
    MagnoliaTree,
    CherryTree,
    OakTree,
    TomatoPlant,
};

const plantFlora = {
    onPurchaseFlora(item) {
        const ItemSprite = floraSprite[item.className];
        const props = FLORA[item.className];
        this.floraPurchased = new ItemSprite(this, Infinity, Infinity, props);
        this.floraPurchased.disableInteractive();
        this.floraPurchased.alpha = 0.75;
        this.add.existing(this.floraPurchased);
    },

    onHover(sprite) {
        if (this.floraPurchased) {
            this.floraPurchased.setTint(0xff4a02);
            this.floraPurchased.isoX = sprite.isoX;
            this.floraPurchased.isoY = sprite.isoY;
        }
    },

    SoilTile: {
        onHover(sprite) {
            if (this.floraPurchased) {
                this.floraPurchased.clearTint();
            }
        },

        onClick(sprite) {
            if (this.floraPurchased) {
                this.floraPurchased.setInteractive();
                this.floraPurchased.clearTint();
                this.floraPurchased.isoX = sprite.isoX;
                this.floraPurchased.isoY = sprite.isoY;
                this.floraPurchased.alpha = 1;
                this.floraPurchased.state.plantedAt = Date.now();
                this.floraPurchased.growthAnimation(0);
                this.setState({ offset: this.state.offset + this.floraPurchased.props.absorption });
                delete this.floraPurchased;
            }
        },
    },
};

export default plantFlora;
