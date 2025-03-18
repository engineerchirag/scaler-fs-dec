import Movie from "./Movie";

const MovieList = ({ movies, watchlist, setWatchlist }) => {
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <Movie movie={movie} watchlist={watchlist} setWatchlist={setWatchlist} />
            ))}
        </div>
    )
}

export default MovieList;