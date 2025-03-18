import { StrictMode, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './components/Header'
import MovieListPage from './pages/MovieListPage'
import MoveDetailPage from './pages/MovieDetailPage'
import WatchListPage from './pages/WatchListPage'

function App() {
  const [watchlist, setWatchlist] = useState({});

  return (
    <BrowserRouter>
    <StrictMode>
      <Header />
      <Routes>
        <Route path="/" element={<MovieListPage watchlist={watchlist} setWatchlist={setWatchlist} />} />
        <Route path="/details" element={<MoveDetailPage />} />
        <Route path="/watchlist" element={<WatchListPage watchlist={watchlist} setWatchlist={setWatchlist} />} />
        <Route path="*" element={ <h2> Page not found!</h2>} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
  )
}

export default App
