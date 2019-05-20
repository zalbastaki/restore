import TOMATO_PLANT_URL from '../assets/market/tomato.png';
import STRAWBERRY_PLANT_URL from '../assets/market/strawberry.png';
import SUNFLOWER_PLANT_URL from '../assets/market/sunflower.png';
import BLUEBERRY_PLANT_URL from '../assets/market/blueberry.png';
import SWEET_PEA_PLANT_URL from '../assets/market/peas.png';
import WATERMELON_PLANT_URL from '../assets/market/watermelon.png';
import CATNIP_PLANT_URL from '../assets/market/catnip.png';
import MAGNOLIA_PLANT_URL from '../assets/market/magnolia.png';
import CHERRYBLOSSOM_PLANT_URL from '../assets/market/cherryblossom.png';
import ACORN_PLANT_URL from '../assets/market/acorn.png';

const MINUTES_MS = 60 * 1000;

const FLORA = {
    TomatoPlant: {
        id: 0,
        name: 'Tomato',
        className: 'TomatoPlant',
        price: 6,
        resale: 3,
        growsIn: 0.5 * MINUTES_MS,
        //growsIn: 10 * MINUTES_MS,
        absorption: 8,
        featuredImageUrl: TOMATO_PLANT_URL,
    },
    StrawberryPlant: {
        id: 1,
        name: 'Strawberry',
        className: 'StrawberryPlant',
        price: 10,
        resale: 6,
        growsIn: 1 * MINUTES_MS,
        //growsIn: 30 * MINUTES_MS,
        absorption: 9,
        featuredImageUrl: STRAWBERRY_PLANT_URL,
    },
    SunflowerPlant: {
        id: 2,
        name: 'Sunflower',
        className: 'SunflowerPlant',
        price: 15,
        resale: 12,
        growsIn: 60 * MINUTES_MS,
        absorption: 8,
        featuredImageUrl: SUNFLOWER_PLANT_URL,
    },
    BlueberryPlant: {
        id: 3,
        name: 'Blueberry',
        className: 'BlueberryPlant',
        price: 18,
        resale: 14,
        growsIn: 120 * MINUTES_MS,
        absorption: 10,
        featuredImageUrl: BLUEBERRY_PLANT_URL,
    },
    SweetPeaPlant: {
        id: 4,
        name: 'Sweet Pea',
        className: 'SweetPeaPlant',
        price: 24,
        resale: 20,
        growsIn: 240 * MINUTES_MS,
        absorption: 8,
        featuredImageUrl: SWEET_PEA_PLANT_URL,
    },
    WatermelonPlant: {
        id: 5,
        name: 'Watermelon',
        className: 'WatermelonPlant',
        price: 28,
        resale: 25,
        growsIn: 360 * MINUTES_MS,
        absorption: 9,
        featuredImageUrl: WATERMELON_PLANT_URL,
    },
    CatnipPlant: {
        id: 6,
        name: 'Catnip',
        className: 'CatnipPlant',
        price: 50,
        resale: 48,
        growsIn: 600 * MINUTES_MS,
        absorption: 10,
        featuredImageUrl: CATNIP_PLANT_URL,
    },
    MagnoliaTree: {
        id: 7,
        name: 'Magnolia',
        className: 'MagnoliaTree',
        price: 8,
        resale: 5,
        growsIn: 60 * MINUTES_MS,
        absorption: 15,
        featuredImageUrl: MAGNOLIA_PLANT_URL,
    },
    CherryTree: {
        id: 8,
        name: 'Cherry',
        className: 'CherryTree',
        price: 13,
        resale: 10,
        growsIn: 180 * MINUTES_MS,
        absorption: 20,
        featuredImageUrl: CHERRYBLOSSOM_PLANT_URL,
    },
    OakTree: {
        id: 9,
        name: 'Oak',
        className: 'OakTree',
        price: 30,
        resale: 28,
        growsIn: 480 * MINUTES_MS,
        absorption: 28,
        featuredImageUrl: ACORN_PLANT_URL,
    },
}

export default FLORA;