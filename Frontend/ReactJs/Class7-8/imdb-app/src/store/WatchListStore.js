import { createSlice } from '@reduxjs/toolkit'

const initialState = {};

export const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
        state[action.payload.id] = action.payload;
    },
    removeFromWatchlist: (state, action) => {
        delete state[action.payload];
    }
        
  },
})

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;