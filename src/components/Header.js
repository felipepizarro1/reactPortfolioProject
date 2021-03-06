import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';

var resume = require('../Felipe-Pizarro-Resume-2022.pdf');

class Header extends Component {

    constructor(props) {
        super(props);


        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });

    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }


    render() {
    return (
        <React.Fragment>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col mt-5 ml-5 col-sm-5 ">
                            <div className='container mt-2 d-flex '>
                                
                                <a className="btn btn-social-icon " href="https://github.com/felipepizarro1" target="_blank"><i className="fa fa-github" /></a>{' '}
                                <a className="btn btn-social-icon ml-1 " href="https://www.behance.net/felipepizarrodev" target="_blank"><i className="fa fa-behance" /></a>{' '}
                                <a className="btn btn-social-icon ml-1" href="https://www.linkedin.com/in/felipepizarrodev" target="_blank"><i className="fa fa-linkedin" /></a>{' '}
                                
                            </div>
                        </div>

                        <div className="col ml-5 mt-5">
                            <div className=" ml-4 container d-flex">
                                <Navbar dark expand="lg">
                                <NavbarToggler onClick={this.toggleNav} />
                                    <Collapse isOpen={this.state.isNavOpen} navbar>
                                        <Nav className='ml-5' navbar>
                                            <NavItem>
                                            <a className="nav-link" type="button" id="button"><NavLink exact activeClassName="active" className="justlink"  to='/' >Portfolio</NavLink></a>
                                            </NavItem>
                                            <NavItem>
                                            <a className="nav-link" type="button" id="button"><NavLink activeClassName="active" className="justlink" to='/about'>About</NavLink> <span className="sr-only">(current)</span></a>
                                            </NavItem>
                                            <NavItem>
                                            <a className="nav-link" type="button" id="button"><NavLink activeClassName="active" className='justlink' to='/contact'>Contact</NavLink></a>
                                            </NavItem>
                                            <NavItem>
                                            <a className="nav-link" type="button" id="button"><Link className='justlink' to={resume} target="_blank" download>Resume</Link></a>
                                            </NavItem>
                                        </Nav>
                                    </Collapse>
                                </Navbar>
                            </div>
                        </div>
                    </div>         
                </div>
            </header>
        </React.Fragment>
    
  
     )
    }
  }
  
  export default Header;