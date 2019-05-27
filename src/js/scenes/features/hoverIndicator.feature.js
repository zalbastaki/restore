const hoverIndicator = {
    onPointerOver(sprite) {
        sprite.setTint(0x999999);
    },

    onPointerOut(sprite) {
        sprite.clearTint();
    },
};

export default hoverIndicator;