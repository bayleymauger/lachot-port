import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import SimpleSlider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';
import './main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SimpleSlider />
        <Footer />
      </div>
    );
  }
}

export default App;
