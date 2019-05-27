const harvestFlora = {
    Flora: {
        onPointerOver(sprite) {
            this.setState({
                inspectFlora: sprite,
            });
        },

        onPointerOut(sprite) {
            this.setState({ inspectFlora: null });
        },

        onPointerDown(sprite) {
            if (sprite.state.plantedAt) {
                if (sprite.getGrowthProgress() === 1) {
                    sprite.growthAnimation(0);
                    sprite.state.plantedAt = Date.now();
                    this.setState({ coins: this.state.coins + sprite.props.resale });
                }
            }
        },
    },
};

export default harvestFlora;
