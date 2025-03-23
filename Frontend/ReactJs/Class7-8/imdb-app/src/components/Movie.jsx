import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist, removeFromWatchlist } from "../store/WatchListStore";

const Movie = ({movie }) => {
    
    const watchlist = useSelector((state) => state.watchList);
    const dispatch = useDispatch();

    const handleWatchListBtnClick = () => {
        if (!watchlist[movie.id]) {
            dispatch(addToWatchlist({...movie}));
        } else {
            dispatch(removeFromWatchlist(movie.id));
        }
        
    }
    return (
        <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <button onClick={handleWatchListBtnClick}>{watchlist[movie.id] ? '-' : '+'}  Watchlist</button>
            </div>
        </div>
    )
}

export default Movie;