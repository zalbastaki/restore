import InteractiveIsoSprite from '../InteractiveIsoSprite.js';
import BASE_DURATION from '../ANIMATIONS_BASE_DURATION.js';

function snakeUpperCase(str) {
    return str.replace(/(.)([A-Z])/g, '$1_$2').toUpperCase();
}

class FloraSprite extends InteractiveIsoSprite {
    constructor(scene, x, y, key, props) {
        super(scene, x, y, 0, key, undefined);
        this.props = props;
        this.state = {};
    }

    growthAnimation(progress) {
        const key = snakeUpperCase(this.constructor.name) + '_GROWTH';
        this.play(key, false, 0);
        
        const frames = this.anims.getTotalFrames();
        const endOnLastFrame = (frames - 1) / frames;
        this.anims.setTimeScale((BASE_DURATION / this.props.growsIn) * endOnLastFrame);

        this.anims.setRepeat(0);
        this.anims.setProgress(progress);
    }

    getGrowthProgress() {
        return Math.min((Date.now() - this.state.plantedAt) / this.props.growsIn, 1);
    }
}

export default FloraSprite;