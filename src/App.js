import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';
import './main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Slider />
        <Footer />
      </div>
    );
  }
}

export default App;
