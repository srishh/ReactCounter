import React, { Component } from 'react';
import './Main.css'

class Main extends Component {

        render() {
        return (
            <main>
            Main
            <br></br>
            <button type="button" id="btn" onClick = { this.props.counter }>Change count in Header</button>
            </main>
        );
        }
  }
  export default Main;