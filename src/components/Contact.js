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
                        <div class="col-sm-12  mt-5" >
                            <h1 className="textstrong mb-3 d-flex justify-content-center">Contact</h1>
                            <p className="d-flex justify-content-center mb-1">I'm available for work! Contact me at </p><a href="mailto:fpizarro.ux@gmail.com" className="d-flex justify-content-center ">fpizarro.ux@gmail.com</a>
                        </div>
                    </div>
                    <div className="row d-flex m-5" >
                        <div class="col-sm-6 mt-2 " >
                            <p className="d-flex justify-content-start">See my code at GitHub</p>
                        </div>
                        <div class="col-sm-6 mt-2 " >
                            <p className="d-flex justify-content-end">See my code at GitHub</p>
                        </div>
                    </div>
                </div>
            </FadeTransform>
        </div>

    )

}










export default Contactcomponent;