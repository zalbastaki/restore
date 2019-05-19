import React, { Fragment, useState } from 'react';
import CoinDisplay from './components/CoinDisplay.component.js';
import MarketButton from './components/MarketButton.component.js';
import Market from './components/Market.component.js';

function GUI(props) {
    const [marketOpen, setMarketOpen] = useState(false);
    const [coins, setCoins] = useState(30);
    return (
        <Fragment>
            <CoinDisplay value={coins} />
            <MarketButton onClick={() => setMarketOpen(!marketOpen)} />
            <Market
                categories={props.categories}
                open={marketOpen}
                coins={coins}
                onPurchase={(item) => {
                    setCoins(coins - item.price);
                    setMarketOpen(false);
                    props.onPurchase(item);
                }}
            />
        </Fragment>
    );
}

export default GUI;
