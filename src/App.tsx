import React from 'react';
import './App.scss';
import './resetStyles/reset.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import TitlePage from './components/TitlePage';
import Servises from './components/Servises';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/contact';

function App() {
  return (
    <BrowserRouter>
      <div id="home" className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {' '}
                <Header />
                <TitlePage />
                <Servises />
                <About />
                <h1 className="h1">My Projects</h1>
                <Projects />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
