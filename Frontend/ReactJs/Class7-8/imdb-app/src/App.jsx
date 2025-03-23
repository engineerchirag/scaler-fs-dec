import { StrictMode, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './components/Header'
import MovieListPage from './pages/MovieListPage'
import MoveDetailPage from './pages/MovieDetailPage'
import WatchListPage from './pages/WatchListPage'
// import WatchListProvider from './assets/contexts/watchlistContext'

function App() {
  return (
    <BrowserRouter>
        <StrictMode>
          <Header />
          {/* <WatchListProvider> */}
            <Routes>
              <Route path="/" element={<MovieListPage />} />
              <Route path="/details" element={<MoveDetailPage />} />
              <Route path="/watchlist" element={<WatchListPage  />} />
              <Route path="*" element={ <h2> Page not found!</h2>} />
            </Routes>
          {/* </WatchListProvider> */}
        </StrictMode>
  </BrowserRouter>
  )
}

export default App
