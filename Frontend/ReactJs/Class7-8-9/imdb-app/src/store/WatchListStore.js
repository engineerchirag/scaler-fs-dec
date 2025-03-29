import { createSlice } from '@reduxjs/toolkit'

const fetchStateFromLocalStorage = () => {
    const state = localStorage.getItem('watchlist');
    if (state) {
        return JSON.parse(state);
    }
};

const saveStateToLocalStorage = (state) => {
    localStorage.setItem('watchlist', JSON.stringify(state));
};

const initialState = fetchStateFromLocalStorage() || {};

export const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
        state[action.payload.id] = action.payload;
        saveStateToLocalStorage(state);
    },
    removeFromWatchlist: (state, action) => {
        delete state[action.payload];
        saveStateToLocalStorage(state);
    }
  },
})

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;