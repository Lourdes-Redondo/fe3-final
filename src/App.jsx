
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import React, { useState } from 'react'
import { Route } from "react-router-dom";
import './Estilos.css';

function App() {

  const [theme, setTheme] = useState('light-theme');

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme'
    );
  };
  return (
    <>
      <div className="App">
          <Navbar/>
          <Route path="/" element = {<home />} />
          <Route path="/contact" element = {<contact />} />
          <Route path="/dentist" element = {<dentist />} />
          <Route path="/favs" element = {<favs />} />
          <Route path="*" element = {<h1>Error 404 - Page not found</h1>} />

          <Footer/>
      </div>

      <div className={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
    </div>
  );

    </>
  );
}

export default App;
