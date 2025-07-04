import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import Navbar from './components/Navbar';



/*Este componente será injetado no index.html via main.tsx*/
function App() {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold text-blue-700">
          IEEE IPLeiria Website
        </h1>
      </main>
    </>
  );
}

export default App
