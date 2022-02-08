import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Homecomponent from './components/Body';
import Aboutcomponent from './components/About';
import Contactcomponent from './components/Contact';




class App extends Component {



  render() {
      return (
          <div className="App" >
              <Header/>
                    <Switch>
                        <Route path='/' exact>
                            <Homecomponent />
                        </Route>
                        <Route path='/about'>
                            <Aboutcomponent/>
                        </Route>
                        <Route path='/contact'>
                            <Contactcomponent/>
                        </Route>
                    </Switch>
          </div>
      );
  }
}



export default App;
