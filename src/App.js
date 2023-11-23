import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Academic from './Components/Academic/Academic';
import Footer from './Components/Footer/Footer';
import Slider from './Components/Slider/Slider';



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Slider />
      <Skills />
      <Academic />
      <Footer />
    </div>
  );
}

export default App;
