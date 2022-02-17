import React, { Component } from 'react';
import { FadeTransform, Fade, Stagger, } from 'react-animation-components';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

var imgnotebook = require('../NOTEBOOK-1.png');


class Homecomponent extends Component {

    

    render() {
    return (
        <div className="App">
                <div class="container ">
                    <div class="row m-5" >
                        <div class="col-12 col-sm-6 mt-5">
                        <FadeTransform
                            in
                            transformProps={{
                                exitTransform: 'scale(0.9) translateY(60%)'
                            }}>
                            <h1 className="littlefat" >Hello There! <h1 className='littlefat calypsoonly'>I'm Felipe Pizarro</h1></h1>
                            <p className="d-sm-block ">Full Stack Developer from Nucamp<br></br> Coding <em className='textstrong'>Bootcamp</em></p>
                            <a href="mailto:fpizarro.ux@gmail.com"><button type="button"  data-toggle="modal" data-target="#adoptapet" className="btn mt-2  btn-lg btn-outline-light">Contact</button></a>
                        </FadeTransform>
                        </div>
                        <div class="col-sm-6 col-12 mt-2">
                        <Stagger in>
                            <Fade in>                                    
                              <h1 className="textstrong">Projects</h1>  
                            </Fade>
                            <Fade in>
                            <Link to='/Project1' style={{ textDecoration: 'none' }}><h3 className='projectstitles mt-3'>‣ Pets Website: Scrolling FX</h3></Link>
                            </Fade>
                            <Fade in>
                            <a href='https://github.com/felipepizarro1/reactPortfolioProject' target="_blank" style={{ textDecoration: 'none' }}><h3 className='projectstitles mt-3'>‣ Portfolio with React: GitHub Code</h3></a>
                            </Fade>
                            <Fade in className='d-flex justify-content-center mt-5'>
                            <img  width={250} src={imgnotebook} />
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