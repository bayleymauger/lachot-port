import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {

  render() {
    return (
      <nav>
        <a href="/"><span id="logo">Bayley Mauger</span></a>
        <ul>
          <li className="home project active">
              <a className="change-page hover-fill-color" href="../">
                  Projects
                  <span className="link-layer" data-text="Projects"></span>
              </a>
          </li>
          <li className="about">
            <a className="change-page hover-fill-color" href="../">
              About
              <span className="link-layer" data-text="About"></span>
          </a></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
