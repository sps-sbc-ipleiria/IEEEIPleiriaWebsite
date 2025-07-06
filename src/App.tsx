import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Departments from './pages/Departments';
import Events from './pages/Events';
import About from './pages/About';
import Contacts from './pages/Contacts';


import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollToTop from "./components/ScrollToTop";

/*Este componente será injetado no index.html via main.tsx*/
function App() {
  return (
    <>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            {/* Rota de fallback (404) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          <ScrollToTopButton />
        </BrowserRouter>
    </>
  );
}

export default App
