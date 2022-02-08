import React, { Component } from 'react';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function Homecomponent() {
    return (
        <div className="App">
            
                <div class="container ">
                    <div class="row m-5" >
                        
                        <div class="col-sm-6 mt-5" data-aos="fade-right">
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
                        <div class="col-sm-6 mt-3">
                        <FadeTransform
                            in
                            transformProps={{
                                exitTransform: 'scale(0.9) translateY(60%)'
                            }}>
                            <h1>Projects</h1>
                        </FadeTransform>
                        <Stagger in>
                            <Fade in>
                            <a href='https://argoswebsite.netlify.app/' target="_blank" style={{ textDecoration: 'none' }}><h3>‣ Argos: Scrolling Animation Project</h3></a>
                            </Fade>
                        </Stagger>
                        </div>
                    </div>
                </div>
                
        </div>
    )
  }





export default Homecomponent;