const hoverIndicator = {
    onHover(sprite) {
        sprite.setTint(0x999999);
    },

    onHoverOut(sprite) {
        sprite.clearTint();
    },
};

export default hoverIndicator;