import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Homecomponent from './components/Body';
import Aboutcomponent from './components/About';
import Contactcomponent from './components/Contact';
import Footercomponent from './components/Footer';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import './App.css';




class App extends Component {



  render() {
      return (
          <div className="App" >
              <Header/>
                    <Switch>
                        <Route path='/' exact>
                            <Homecomponent />
                        </Route>
                        <Route path='/Project1'>
                            <Project1 />
                        </Route>
                        <Route path='/Project2'>
                            <Project2 />
                        </Route>                        
                        <Route path='/about'>
                            <Aboutcomponent/>
                        </Route>
                        <Route path='/contact'>
                            <Contactcomponent/>
                        </Route>
                    </Switch>
                <Footercomponent/>
          </div>
      );
  }
}



export default App;
