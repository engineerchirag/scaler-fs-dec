import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.jsx';
import MovieListPage from './pages/MovieListPage.jsx';
import MoveDetailPage from './pages/MovieDetailPage.jsx';
import WatchListPage from './pages/WatchListPage.jsx';
import Header from './components/Header.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Header />
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/details" element={<MoveDetailPage />} />
        <Route path="/watchlist" element={<WatchListPage />} />
        <Route path="*" element={ <h2> Page not found!</h2>} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
