import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import TodoList from './components/TodoList.jsx';

function App() {
  return (
    <div>
      {/* <TodoList myStyles={{color: 'red', size: '14px'}}/> */}
      <TodoList title="Your Todo"/>
    </div>
  )
}

export default App
