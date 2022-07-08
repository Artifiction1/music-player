export const addToFav = (artist) => ({
    type: 'ADD_TO_FAV',
    payload: artist
})

export const removeFromFav = (artist) => ({
    type: 'REMOVE_FROM_FAV',
    payload: artist
})

export const addToPlayer = (song) => ({
    type: 'ADD_TO_PLAYER',
    payload: song
})
export const SEARCH = (artist) => ({
    type: 'SEARCH',
    payload: artist
})