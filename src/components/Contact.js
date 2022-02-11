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
                <div class="container ">
                    <div class="row m-5 " >
                        <div class="col-sm-12  mt-5" >
                            <h1 className="textstrong mb-3 d-flex justify-content-center">Contact</h1>
                            <p className="d-flex justify-content-center ">I'm available for work! Contact me at <a href="mailto:fpizarro.ux@gmail.com"> fpizarro.ux@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </FadeTransform>
        </div>

    )

}










export default Contactcomponent;