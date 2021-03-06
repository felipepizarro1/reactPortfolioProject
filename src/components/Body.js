import React, { Component } from 'react';
import { FadeTransform, Fade, Stagger, } from 'react-animation-components';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

var imgnotebook = require('../NOTEBOOK-2.png');


class Homecomponent extends Component {

    

    render() {
    return (
        <div className="App">
                <div class="container ">
                    <div class="row mr-5 ml-5 mt-5 " >
                        <div class="col-12 col-lg-6 mt-5">
                        <FadeTransform
                            in
                            transformProps={{
                                exitTransform: 'scale(0.9) translateY(40%)'
                            }}>
                            <h1 className="littlefat" >Hello There! <h1 className='littlefat calypsoonly'>I'm Felipe Pizarro</h1></h1>
                            <p className="d-sm-block ">Entry level <em className='textstrong'>Front End Developer</em> <br></br>from Nucamp Coding Bootcamp</p>
                            <a href="mailto:fpizarro.ux@gmail.com"><button type="button"  data-toggle="modal" data-target="#adoptapet" className="btn mt-2 mb-3  btn-lg btn-dark">Contact</button></a>
                        </FadeTransform>
                        </div>
                        <div class="col-lg-6 col-12 mt-2">
                        <Stagger in>
                            <Fade in>                                    
                              <h1 className="textstrong">Projects</h1>  
                            </Fade>
                            <Fade in>
                            <Link to='/Project1' style={{ textDecoration: 'none' }}><h3 className='projectstitles mt-3'>‣ Pets Website: Scrolling FX</h3></Link>
                            </Fade>
                            <Fade in>
                            <Link to='/Project2' style={{ textDecoration: 'none' }}><h3 className='projectstitles mt-3'>‣ Portfolio Website </h3></Link>
                            </Fade>
                            <Fade in className='d-flex justify-content-center mt-4'>
                            <img  width={350} src={imgnotebook} />
                            </Fade>
                        </Stagger>
                        </div>
                    </div>
                </div>
        
        </div>
        );
        
    }
}








export default Homecomponent;