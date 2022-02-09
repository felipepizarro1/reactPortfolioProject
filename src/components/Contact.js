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
                        <div class="col-sm-12  mt-2" >
                            <h1 className="textstrong mb-4 d-flex justify-content-center">Contact</h1>
                            <p className="d-flex justify-content-center ">I'm available for work. Contact me at fpizarro.ux@gmail.com</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col m-5'> 
                        <p className="d-none d-sm-block ">Full Stack Development Student at <br></br>Nucamp Coding <em className='textstrong'>Bootcamp</em></p>
                        </div>

                    </div>
                </div>
            </FadeTransform>
        </div>

    )

}










export default Contactcomponent;