import React, { Component } from 'react';
import Headercomponent from './components/Header';
import Homecomponent from './components/Body';


class App extends Component {
  render() {
      return (
          <div className="App">
              <Headercomponent />
              <Homecomponent />
          </div>
      );
  }
}



export default App;
