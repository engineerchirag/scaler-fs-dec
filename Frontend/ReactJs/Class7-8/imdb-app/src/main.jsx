import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.jsx';
import MovieListPage from './pages/MovieListPage.jsx';
import MoveDetailPage from './pages/MovieDetailPage.jsx';
import WatchListPage from './pages/WatchListPage.jsx';
import Header from './components/Header.jsx';
import { Provider } from 'react-redux';
import { store } from './store/index.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
