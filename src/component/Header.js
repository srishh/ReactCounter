import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    
    render() {
      return (
        <header>
          Header
          <p>
            { this.props.display }
          </p>
        </header>
      );
    }
  }
  
  export default Header;