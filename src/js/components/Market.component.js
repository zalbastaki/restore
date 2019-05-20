import React, { useState } from 'react';
import styled from 'styled-components';
import Coin from './Coin.component.js';

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    height: 520px;
    max-width: 768px;
    display: ${({ open }) => open ? 'inline-grid' : 'none'}
    grid-template-columns: 70% 30%;
    grid-template-rows: 30% 70%;
`;

const Header = styled.div`
    display: flex;
    grid-column-start: 1;
    grid-column-end: end;
`;

const HeaderColumn = styled.div`
    position: relative;
    flex-grow: 1;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        transform: translateY(100%);
        width: 100%;
        height: 50px;
        border-radius: 0 0 50% 50%;
    }

    &:nth-child(odd) {
        background: #f0f0dc;
        
        &::after {
            background: #e1e2ab;
        }
    }
    
    &:nth-child(even) {
        background: #da2a29;
        
        &::after {
            background: #c51312;
        }
    }
`;

const Tabs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

const TabsHeader = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const TabsHeaderItem = styled.button`
    border: none;
    background: ${({ active }) => active ? '#f28436' : '#eb7330'};
    color: white;
    font-size: 1.5rem;
    font-weight: bolder;
    padding: 60px 10px 10px 10px;
    margin: 0;
    cursor: pointer;
`;

TabsHeaderItem.defaultProps = {
    active: false,
};

const TabsBody = styled.div`
    background: #f28436;
    flex-grow: 1;
    display: flex;
    padding: 10px;
`;

const ItemCard = styled.div`
    width: 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    font-size: 1.5rem;
    border: 2px solid black;
    border-radius: 4px;
    background: white;
    margin: 10px;
    padding: 10px;
`;

const ItemDetailsButton = styled.button`
    flex-grow: 1;
    cursor: pointer;
    align-self: stretch;
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    transform: scale(1);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    outline: none;

    &:hover,
    &:active {
        transform: scale(1.25);
    }
`;

const ItemPreview = styled.img`
    width: 100%;
    height: auto;
    max-width: 50px;
    image-rendering: auto;
    image-rendering: crisp-edges;
    image-rendering: pixelated;
`;

const ArrowButton = styled.button`
    background: none;
    border: none;
    padding: 10px;
    margin: 0;
    outline: none;
    cursor: pointer;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    align-self: center;
    transform: scale(1);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover {
        transform: scale(1.25);
    }
    
    &:disabled {
        visibility: hidden;
    }
`;

const BuyButton = styled.button`
    background: #eee;
    border 2px solid black;
    border-radius: 4px;
    margin: 0;
    padding: 5px 15px;
    font-size: 1.25rem;
    cursor: pointer;

    &:disabled {
        filter: grayscale(50%);
    }
`;

const DetailsPanel = styled.div`
    background: #eb7330;
    padding: 90px 30px 30px 30px;
`;

function Market(props) {
    const [activeCategory, setActiveCategory] = useState(props.categories[0]);
    const [activeItem, setActiveItem] = useState(props.categories[0].items[0]);
    const [offset, setOffset] = useState(0);
    const pageSize = 3;
    return (
        <Container open={props.open}>
            <Header>
                <HeaderColumn />
                <HeaderColumn />
                <HeaderColumn />
                <HeaderColumn />
                <HeaderColumn />
                <HeaderColumn />
                <HeaderColumn />
            </Header>

            <Tabs>
                <TabsHeader>
                    {props.categories.map((category) => (
                        <TabsHeaderItem
                            key={category.id}
                            active={category.id === activeCategory.id}
                            onClick={() => {
                                setOffset(0);
                                setActiveCategory(category);
                                setActiveItem(category.items[0]);
                            }}
                        >
                            {category.name}
                        </TabsHeaderItem>
                    ))}
                </TabsHeader>

                <TabsBody>
                    <ArrowButton
                        onClick={() => setOffset(offset - 1)}
                        disabled={offset === 0}
                    >
                        ↢
                    </ArrowButton>

                    {activeCategory.items.slice(offset, offset + pageSize).map((item) => (
                        <ItemCard key={item.id}>
                            {item.name}

                            <ItemDetailsButton
                                onClick={() => setActiveItem(item)}
                                onMouseOver={() => setActiveItem(item)}
                            >
                                <ItemPreview
                                    src={item.featuredImageUrl}
                                    alt={item.name}
                                />
                            </ItemDetailsButton>
                            
                            <BuyButton
                                disabled={props.coins < item.price}
                                onClick={() => props.onPurchaseFlora(item)}
                            >
                                <Coin /> {item.price}
                            </BuyButton>
                        </ItemCard>
                    ))}

                    <ArrowButton
                        onClick={() => setOffset(offset + 1)}
                        disabled={offset === activeCategory.items.length - pageSize}
                    >
                        ↣
                    </ArrowButton>
                </TabsBody>
            </Tabs>

            <DetailsPanel>
                <h1>{activeItem.name}</h1>
                <br/>
                <strong>Price</strong> <Coin /> {activeItem.price} coins
                <br/>
                <strong>Resale</strong> <Coin /> {activeItem.resale} coins
                <br/>
                <strong>Grows In</strong> {activeItem.growsIn < 60 * 60 * 1000 ? `${activeItem.growsIn / (60 * 1000)} mins` : `${activeItem.growsIn / (60 * 60 * 1000)} hrs`}
                <br/>
                <strong>Absorption</strong> {activeItem.absorption} lbs per year
            </DetailsPanel>
        </Container>
    );
}

Market.defaultProps = {
    open: false,
}

export default Market;
