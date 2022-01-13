import React, { Component } from 'react';
import Headercomponent from './components/Header';
import Bodycomponent from './components/Body';


class App extends Component {
  render() {
      return (
          <div className="App">
              <Headercomponent />
              <Bodycomponent />
          </div>
      );
  }
}



export default App;
