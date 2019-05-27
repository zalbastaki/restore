import SoilTile from '../../sprites/tiles/SoilTile.sprite.js';

const tillBareTile = {
    BareTile: {
        onPointerDown(sprite) {
            sprite.setActive(false);
            sprite.setVisible(false);
            this.add.existing(new SoilTile(this, sprite.isoX, sprite.isoY, this.isoGroup));
        },
    },
};

export default tillBareTile;