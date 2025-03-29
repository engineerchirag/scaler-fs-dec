import { Link } from 'react-router';
import '../App.css';

const Header = () => {
    return (
        <div className="header">
            <h1>IMDB</h1>
            <ul>
                <li>
                    <Link to="/"> Movies</Link>
                </li>
                <li>
                    <Link to="/details">Detail</Link>
                </li>
                <li>
                    <Link to="/watchlist">Watch List</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;