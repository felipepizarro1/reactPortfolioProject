import React, { Component } from 'react';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';



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
                            <h1 >Hello There!<h1 className="textstrong">I'm Felipe Pizarro</h1></h1>
                            <p className="d-sm-block ">Full Stack Development Student at <br></br>Nucamp Coding <em className='textstrong'>Bootcamp</em></p>
                            <a href="mailto:fpizarro.ux@gmail.com"><button type="button"  data-toggle="modal" data-target="#adoptapet" class="btn mt-4  btn-lg btn-outline-light">Contact</button></a>
                        </FadeTransform>
                        </div>
                        <div class="col-sm-6 col-12 mt-4">
                        <Stagger in>
                            <Fade in>                                    
                              <h1 className="textstrong">Projects</h1>  
                            </Fade>
                            <Fade in>
                            
                            <a href='https://argoswebsite.netlify.app/' target="_blank" style={{ textDecoration: 'none' }}><h3>‣ Argos: Scrolling Animation Project</h3></a>
                            <Fade in>
                            <a href='https://github.com/felipepizarro1/reactPortfolioProject' target="_blank" style={{ textDecoration: 'none' }}><h3>‣ Portfolio with React: GitHub Code</h3></a>
                            </Fade>
                            <a href='https://argoswebsite.netlify.app/' target="_blank" style={{ textDecoration: 'none' }}><h3>‣ Pets Website: Scrolling FX</h3></a>
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