const placePurchasedItem = {
    onHover(sprite) {
        if (this.itemPurchased) {
            this.itemPurchased.setTint(0xff4a02);
            this.itemPurchased.isoX = sprite.isoX;
            this.itemPurchased.isoY = sprite.isoY;
        }
    },

    SoilTile: {
        onClick(sprite) {
            if (this.itemPurchased) {
                this.itemPurchased.clearTint();
                this.itemPurchased.isoX = sprite.isoX;
                this.itemPurchased.isoY = sprite.isoY;
                this.itemPurchased.alpha = 1;
                this.itemPurchased = undefined;
            }
        },

        onHover(sprite) {
            if (this.itemPurchased) {
                this.itemPurchased.clearTint();
            }
        },
    },
};

export default placePurchasedItem;
