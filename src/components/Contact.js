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
                    <div class="row m-5" >
                        <div class="col-sm-6 mt-5" data-aos="fade-right">
                            <h1 className="textstrong">Contact</h1>
                            <p className="d-none d-sm-block ">Full Stack Development Student at <br></br>Nucamp Coding <em className='textstrong'>Bootcamp</em></p>
                        </div>
                        <div class="col-sm-6 mt-2">
                            <h1>Contact</h1>
                            <p>Reach out</p> <br></br>
                            
                        </div>
                    </div>
                </div>
            </FadeTransform>
        </div>

    )

}










export default Contactcomponent;