import Phaser from 'phaser';
import IsoPlugin from 'phaser3-plugin-isometric';

class IsoScene extends Phaser.Scene {
    constructor(config) {
        super({
            ...config,
            cameras: {
                ...(config.cameras ? config.cameras : {}),
                zoom: 2.5,
            },
            mapAdd: {
                ...(config.mapAdd ? config.mapAdd : {}),
                isoPlugin: 'iso',
            },
        });
    }

    preload() {
        this.load.scenePlugin({
            key: 'IsoPlugin',
            url: IsoPlugin,
            sceneKey: 'iso',
        });
    }

    create() {
        this.iso.projector.origin.setTo(0.5, 0.3);
        this.isoGroup = this.add.group();

        this.scale.on('resize', this.onScaleResize, this);

        const cursors = this.input.keyboard.createCursorKeys();
        this.cameraControls = new Phaser.Cameras.Controls.SmoothedKeyControl({
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            acceleration: 0.05,
            drag: 0.001,
            maxSpeed: 0.2,
        });
    }

    update(time, delta) {
        this.cameraControls.update(delta);
    }

    onScaleResize(size) {
        this.cameras.resize(size.width, size.height);
    }
}

export default IsoScene;
