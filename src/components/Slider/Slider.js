import React, {Component} from 'react';
import './Slider.css';

class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider">

      </div>
    );
  }
}

export default SimpleSlider;
