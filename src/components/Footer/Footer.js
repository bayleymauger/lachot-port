import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className="scroll-down"><span><i className="fa fa-long-arrow-down" aria-hidden="true"></i>Scroll to Discover</span></div>
        <div className="social">
          <a href="https://github.com/bayleymauger" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
          <a href="https://codepen.io/bayleymauger/" target="_blank" rel="noopener noreferrer"><i className="fa fa-codepen"></i></a>
          <a href="https://www.linkedin.com/in/bayley-mauger-938708140/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
        </div>
      </div>
    );
  }
}

export default Footer;
