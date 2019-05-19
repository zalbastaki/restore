import harvestFloraFeature from './features/harvestFlora.feature.js';
import hoverIndicatorFeature from './features/hoverIndicator.feature.js';
import plantFloraFeature from './features/plantFlora.feature.js';
import tillBareTileFeature from './features/tillBareTile.feature.js';

/**
 * @example
 * prepare({
 *     onHover:'im a generic hover',
 *     SoilTile: {
 *         onClick: 'meeza soil click',
 *         onHover: 'meeza soil hoooover',
 *     },
 * });
 * // {
 * //     onHover: 'im a generic hover',
 * //     onSoilTileClick: 'meeza soil click',
 * //     onSoilTileHover: 'meeza soil hoooover',
 * // }
 */
function prepare(feature) {
    const result = {};
    for (const key of Object.keys(feature)) {
        if (key.startsWith('on')) {
            // key is a handler (e.g. onClick)
            result[key] = feature[key];
        } else {
            // key is a class name (e.g. SoilTile: { onClick } )
            const x = prepare(feature[key]);
            Object.assign(
                result,
                Object.entries(x)
                    .map(([k, v]) => [k.replace(/^on/, 'on' + key), v])
                    // equivalent to lodash.fromPairs
                    .reduce((r, [k, v]) => Object.assign(r, { [k]: v }), {})
            );
        }
    }
    return result;
}

/**
 * @example
 * merge([
 * {
 *     onHover: 'im a generic hover0',
 *     onSoilTileClick: 'meeza soil click0',
 *     onSoilTileHover: 'meeza soil hoooover0',
 * },
 * {
 *     onHover: 'im a generic hover1',
 *     onBareTileClick: 'meeza bare click1',
 *     onSoilTileHover: 'meeza soil hoooover1',
 * }
 * ])
 * // {
 * //   "onHover": [
 * //     "im a generic hover0",
 * //     "im a generic hover1"
 * //   ],
 * //   "onSoilTileClick": [
 * //     "meeza soil click0"
 * //   ],
 * //   "onSoilTileHover": [
 * //     "meeza soil hoooover0",
 * //     "meeza soil hoooover1"
 * //   ],
 * //   "onBareTileClick": [
 * //     "meeza bare click1"
 * //   ]
 * // }
 */
function merge(arrOfHandlers) {
    const result = {};
    for (const handlers of arrOfHandlers) {
        for (const [handlerName, handler] of Object.entries(handlers)) {
            result[handlerName] = result[handlerName] || [];
            result[handlerName].push(handler);
        }
    }
    return result;
}

const eventHandlers = merge([
    prepare(harvestFloraFeature),
    prepare(plantFloraFeature),
    prepare(tillBareTileFeature),
    prepare(hoverIndicatorFeature),
]);

export default eventHandlers;
