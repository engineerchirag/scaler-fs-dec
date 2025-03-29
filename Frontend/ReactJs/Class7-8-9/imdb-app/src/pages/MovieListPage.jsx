import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';
import { setMovies, setTotalPages, fetchMovies } from '../store/MoviesStore';
import { useSelector, useDispatch } from 'react-redux'

const MovieListPage = () => {
    const totalPages = useSelector((state) => state.movieList.totalPages);
    const dispatch = useDispatch();

    const handlePageChange = (pageNo) => {
        dispatch(fetchMovies(pageNo));
    }

    useEffect(() => {
        dispatch(fetchMovies(1));
    }, []);

    return (
        <div className='movie-list-page'>
            <h1>Movie List Page</h1>
            <MovieList />
            <div className='pagination-section'>
                <Pagination onPageChange={handlePageChange} totalPages={totalPages}/>
            </div>
        </div>
    );
}

export default MovieListPage;