export const BUY_ITEM = 'BUY_ITEM';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';


export const buyItem = newItem => {
    return { type: BUY_ITEM, payload: newItem}
};

export const removeFeature = removedFeature => {
    return { type: REMOVE_FEATURE, payload: removedFeature}
};