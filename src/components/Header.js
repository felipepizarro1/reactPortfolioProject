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
            <div class="row">
                <div className="col-12 col-md-3 mr-5 col-sm-8  align-self-center mt-4 ">
                <div class="col-6 col-sm-5 text-center">
                    <h5>Social</h5>
                    <a className="btn btn-social-icon " href="http://instagram.com/"><i class="fa fa-instagram"></i></a>
                    <a class="btn btn-social-icon " href="http://facebook.com/"><i class="fa fa-facebook"></i></a>
                    <a class="btn btn-social-icon " href="http://twitter.com/"><i class="fa fa-twitter"></i></a>
                    <a class="btn btn-social-icon " href="http://youtube.com/"><i class="fa fa-youtube"></i></a>
                </div>
                    
                </div>

                
                <div className="col mt-5">
                    <div className="container d-flex">
                        <nav className="navbar navbar-expand-md what ml-auto">
                            <a className="navbar-brand" href="#">Portfolio</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                    <a className="nav-link" type="button" id="button">About <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Resume</a>
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