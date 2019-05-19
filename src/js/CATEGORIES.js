import FLORA from './FLORA.js';

const CATEGORIES = [
    {
        id: 0,
        name: 'Seeds',
        items: getFlora('Plant'),
    },
    {
        id: 1,
        name: 'Trees',
        items: getFlora('Tree'),
    }
];

function getFlora(category) {
    const result = [];
    for (const key of Object.keys(FLORA)) {
        if (key.endsWith(category)) {
            result.push(FLORA[key]);
        }
    }
    return result;
}

export default CATEGORIES;
