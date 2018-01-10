import React, {Component} from 'react';
import './Slider.css';

class SimpleSlider extends Component {

  componentDidMount() {
  }

  handleScroll() {
    this.refs.activeSlide.style.display = 'none';
    this.refs.nextSlide.style.dispaly = 'auto';
  }

  render() {
    const displayNone = {
      display: "none",
    }
    return (
      <div className="slider" ref="slider" onScroll={this.handleScroll}>
        <div className="inner-slide">
          <div className="active-slide slide-img" ref="activeSlide"></div>
          <div className="slide-img" ref="nextSlide" style={displayNone}></div>
          <div className="slide-img" style={displayNone}></div>
        </div>
      </div>
    );
  }
}

export default SimpleSlider;
