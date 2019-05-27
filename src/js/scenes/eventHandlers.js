import harvestFloraFeature from './features/harvestFlora.feature.js';
import hoverIndicatorFeature from './features/hoverIndicator.feature.js';
import plantFloraFeature from './features/plantFlora.feature.js';
import tillBareTileFeature from './features/tillBareTile.feature.js';

/**
 * @example
 * prepare({
 *     onPointerOver:'im a generic hover',
 *     SoilTile: {
 *         onPointerDown: 'meeza soil click',
 *         onPointerOver: 'meeza soil hoooover',
 *     },
 * });
 * // {
 * //     onPointerOver: 'im a generic hover',
 * //     onSoilTileClick: 'meeza soil click',
 * //     onSoilTileHover: 'meeza soil hoooover',
 * // }
 */
function prepare(feature) {
    const result = {};
    for (const key of Object.keys(feature)) {
        if (key.startsWith('on')) {
            // key is a handler (e.g. onPointerDown)
            result[key] = feature[key];
        } else {
            // key is a class name (e.g. SoilTile: { onPointerDown } )
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
 *     onPointerOver: 'im a generic hover0',
 *     onSoilTilePointerDown: 'meeza soil click0',
 *     onSoilTilePointerOver: 'meeza soil hoooover0',
 * },
 * {
 *     onPointerOver: 'im a generic hover1',
 *     onBareTilePointerDown: 'meeza bare click1',
 *     onSoilTilePointerOver: 'meeza soil hoooover1',
 * }
 * ])
 * // {
 * //   "onPointerOver": [
 * //     "im a generic hover0",
 * //     "im a generic hover1"
 * //   ],
 * //   "onSoilTilePointerDown": [
 * //     "meeza soil click0"
 * //   ],
 * //   "onSoilTilePointerOver": [
 * //     "meeza soil hoooover0",
 * //     "meeza soil hoooover1"
 * //   ],
 * //   "onBareTilePointerDown: [
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
