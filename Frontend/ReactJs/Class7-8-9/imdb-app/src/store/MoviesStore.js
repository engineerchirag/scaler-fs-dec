import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: [],
    totalPages: 0,
    activePage: 1,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
        state.movies = action.payload;
    },
    setTotalPages: (state, action) => {
        state.totalPages = action.payload;
    },
    setActivePage: (state, action) => {
        state.activePage = action.payload;
    }
  },
});

export const fetchMovies = (pageNo) => (dispatch) => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`)
        .then(response => response.json())
        .then(data => {
            dispatch(setMovies(data.results));
            dispatch(setTotalPages(data.total_pages));
            dispatch(setActivePage(pageNo));
        });
  }

export const { setMovies, setTotalPages, setActivePage } = moviesSlice.actions;

export default moviesSlice.reducer;