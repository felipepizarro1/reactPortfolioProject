import React, { Component } from 'react';
import { 
  Container,
  Nav,
  NavLink,
  Navbar,
  NavbarBrand,
  NavDropdown } from 'reactstrap';

function Headercomponent () {
    return (
        <div className="App">
        <header>
        <div className="container">
            <div className="row">
                <div className="col mt-5 ml-5 col-sm-5 ">
                    <div className='container mt-3 d-flex'>
                        <a className="btn btn-social-icon " href="https://github.com/felipepizarro1" target="_blank"><i className="fa fa-github" /></a>{' '}
                        <a className="btn btn-social-icon ml-1" href="https://www.linkedin.com/in/felipepizarrodev" target="_blank"><i className="fa fa-linkedin" /></a>{' '}
                     </div>
                </div>

                
                <div className="col mt-5">
                    <div className="container d-flex">
                        <nav className="navbar navbar-expand-md what ml-auto">
                            
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Portfolio</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" type="button" id="button">About <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="resume-it-Felipe.pdf" download>Resume</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>         
        </div>
        </header>
        </div>
    
  
    )
  }
  
  export default Headercomponent;