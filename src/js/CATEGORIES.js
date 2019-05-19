import TOMATO_PLANT_URL from '../assets/market/tomato.png';
import STRAWBERRY_PLANT_URL from '../assets/market/strawberry.png';
import SUNFLOWER_PLANT_URL from '../assets/market/sunflower.png';
import BLUEBERRY_PLANT_URL from '../assets/market/blueberry.png';
import SWEAT_PEA_PLANT_URL from '../assets/market/peas.png';
import WATERMELON_PLANT_URL from '../assets/market/watermelon.png';
import CATNIP_PLANT_URL from '../assets/market/catnip.png';
import MAGNOLIA_PLANT_URL from '../assets/market/magnolia.png';
import CHERRYBLOSSOM_PLANT_URL from '../assets/market/cherryblossom.png';
import ACORN_PLANT_URL from '../assets/market/acorn.png';

const CATEGORIES = [
    {
        id: 0,
        name: 'Seeds',
        items: [
            {
                id: 0,
                name: 'Tomato',
                className: 'TomatoPlant',
                price: 6,
                resale: 3,
                growsIn: 10,
                absorption: 8,
                featuredImageUrl: TOMATO_PLANT_URL,
            },
            {
                id: 1,
                name: 'Strawberry',
                className: 'StrawberryPlant',
                price: 10,
                resale: 6,
                growsIn: 30,
                absorption: 9,
                featuredImageUrl: STRAWBERRY_PLANT_URL,
            },
            {
                id: 2,
                name: 'Sunflower',
                className: 'SunflowerPlant',
                price: 15,
                resale: 12,
                growsIn: 60,
                absorption: 8,
                featuredImageUrl: SUNFLOWER_PLANT_URL,
            },
            {
                id: 3,
                name: 'Blueberry',
                className: 'BlueberryPlant',
                price: 18,
                resale: 14,
                growsIn: 120,
                absorption: 10,
                featuredImageUrl: BLUEBERRY_PLANT_URL,
            },
            {
                id: 4,
                name: 'Sweat Pea',
                className: 'SweatPeaPlant',
                price: 24,
                resale: 20,
                growsIn: 240,
                absorption: 8,
                featuredImageUrl: SWEAT_PEA_PLANT_URL,
            },
            {
                id: 5,
                name: 'Watermelon',
                className: 'WatermelonPlant',
                price: 28,
                resale: 25,
                growsIn: 360,
                absorption: 9,
                featuredImageUrl: WATERMELON_PLANT_URL,
            },
            {
                id: 6,
                name: 'Catnip',
                className: 'CatnipPlant',
                price: 50,
                resale: 48,
                growsIn: 600,
                absorption: 10,
                featuredImageUrl: CATNIP_PLANT_URL,
            },
        ],
    },
    {
        id: 1,
        name: 'Trees',
        items: [
            {
                id: 7,
                name: 'Magnolia',
                className: 'MagnoliaTree',
                price: 8,
                resale: 5,
                growsIn: 60,
                absorption: 15,
                featuredImageUrl: MAGNOLIA_PLANT_URL,
            },
            {
                id: 8,
                name: 'Cherry',
                className: 'CherryTree',
                price: 13,
                resale: 10,
                growsIn: 180,
                absorption: 20,
                featuredImageUrl: CHERRYBLOSSOM_PLANT_URL,
            },
            {
                id: 9,
                name: 'Oak',
                className: 'OakTree',
                price: 30,
                resale: 28,
                growsIn: 480,
                absorption: 28,
                featuredImageUrl: ACORN_PLANT_URL,
            },
        ],
    }
];

export default CATEGORIES;
