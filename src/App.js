import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllMovie from './Pages/All_Movie/AllMovie';
import Detail from './Pages/Detail/Detail';
import HomePage from './Pages/HomePage/HomePage';
import Navbar from './Pages/Navbar/Navbar';
import Search from './Pages/Seacrh/Search';
import Categories from './Pages/Categories/Categories';
import Footer from './Pages/Footer/Footer';
import { useReducer } from 'react';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <AnimateSharedLayout>
        <AnimatePresence onExitComplete={true} mode="wait">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/AllMovie" element={<AllMovie />} />
              <Route path="/DetailPage/:id" element={<Detail />} replace />
              <Route path="/Search/:name" element={<Search />} replace />
              <Route path="/Categories/:genres" element={<Categories />} />
            </Routes>
          </BrowserRouter>
        </AnimatePresence>
      </AnimateSharedLayout>
      <Footer />
    </div>
  );
}

export default App;
