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
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-3 mr-5 col-sm-8  align-self-center mt-4 ">
                   <a href="#"> <img src="img/logo.png" class="img-fluid" /> </a>
                    
                </div>

                
                <div class="col mt-5">
                    <div class="container d-flex">
                        <nav className="navbar navbar-expand-md what ml-auto">
                            <a class="navbar-brand" href="#">Portfolio</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                    <a class="nav-link" type="button" id="button">About <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#">Contact</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#">Resume</a>
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