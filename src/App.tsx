import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import Navbar from './components/Navbar';
import Home from './pages/Home';

/*Este componente será injetado no index.html via main.tsx*/
function App() {
  return (
    
    <>
      <Navbar />
      <Home />
    </>
      
  );
}

export default App
