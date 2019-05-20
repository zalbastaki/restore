import React from 'react';
import styled from 'styled-components';
import Coin from './Coin.component.js';

const Container = styled.div`
    position: absolute;
    left: 10px;
    top: 10px;
    font-size: 24px;
`;

function CoinDisplay(props) {
    return (
        <Container>
            <Coin /> {props.value}
        </Container>
    );
}

CoinDisplay.defaultProps = {
    value: 0,
};

export default CoinDisplay;
