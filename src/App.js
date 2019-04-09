import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Aside from './component/Aside';

class App extends Component {
  constructor() {
    super();
    this.state = { count : 0 }
  }

  incCount = () => {
    this.setState({
      count : ++this.state.count
    })
  }
  
    render() {
      return (
        <div className="App">
          <Header display = { this.state.count }/>
          <Main counter = { this.incCount }/>
          <Aside/>
          <Footer/>
        </div>
      );
    }
}

export default App;
