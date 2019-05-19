import React from 'react';
import styled from 'styled-components';
import FloatingButton from './FloatingButton.component.js';
import MARKET_ASSET from '../../assets/market/market.png';

const MarketIcon = styled.img`
    display: inline-block;
    width: 72px;
    height: auto;
    margin: auto;
`;

MarketIcon.defaultProps = {
    src: MARKET_ASSET,
    alt: 'Market',
    ariaLabel: 'Open market menu',
};

function MarketButton(props) {
    return (
        <FloatingButton
            background="#ccf1ff"
            onClick={() => {
                event.stopPropagation();
                props.onClick();
            }}
        >
            <MarketIcon />
        </FloatingButton>
    );
}

export default MarketButton;
