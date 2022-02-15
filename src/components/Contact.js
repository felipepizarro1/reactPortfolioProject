import React, { Component } from 'react';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function Contactcomponent () {
    return(
        <div className="App">
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <div className="container ">
                    <div className="row m-5 " >
                        <div class="col-sm-12  mt-4" >
                            <h1 className="textstrong mb-3 d-flex justify-content-center">Contact</h1>
                            <p className="d-flex justify-content-center mb-1">I'm available for work! Contact me at </p><a href="mailto:fpizarro.ux@gmail.com" className="d-flex justify-content-center mb-1">fpizarro.ux@gmail.com</a>
                            <p className="d-flex justify-content-center mt-2 mb-1">See my code on&nbsp;<a className="textstrong" href="https://github.com/felipepizarro1" target="_blank">  GitHub</a></p>
                            <p className="d-flex justify-content-center ">Let's connect on&nbsp; <a className="textstrong" href="https://www.linkedin.com/in/felipepizarrodev" target="_blank">LinkedIn</a></p>
                        </div>
                    </div>
                </div>
            </FadeTransform>
        </div>

    )

}










export default Contactcomponent;