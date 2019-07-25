export const ADD_FEATURE = 'ADD_FEATURE'
export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export const addFeature = e => {
    return { type: ADD_FEATURE, payload: e}
}

export const removeFeature = e => {
    return { type: REMOVE_FEATURE, payload: e}
}