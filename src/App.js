import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';


class App extends Component {
  render() {
      return (
          <div className="App">
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">NuCamp</NavbarBrand>
              </div>
              </Navbar>
          </div>
      );
  }
}

function hellofelipe() {
  return (
  <div>
    <div className="container">
      <div className="row mt-5" >
          <div className="col-6 m-auto">
            Hello I'm Felipe
          </div>
          <div className="col-6 m-auto">
            Projects
          </div>
      </div>
    </div>
  </div>
  )
}

export default App;
