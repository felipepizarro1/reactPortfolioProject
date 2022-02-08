import React, { Component } from 'react';
import { FadeTransform } from 'react-animation-components';

function Aboutcomponent () {
    return(
        <div className="App">
            <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.9) translateY(60%)'
            }}>
                <div class="container ">
                    <div className="row m-5" >
                        <div class="col-sm-6 mt-5" data-aos="fade-right">
                            <h1 className="textstrong">Felipe Pizarro</h1>
                            <p className="d-none d-sm-block ">Full Stack Development Student at <br></br>Nucamp Coding <em className='textstrong'>Bootcamp</em></p>
                        </div>
                        <div className="col-sm-6 mt-2">
                            <h1>About Me</h1>
                            <p className='d-sm-block'>I'm Felipe Pizarro, a graduate of Social Communications and Professional Journalism of the UNIACC University of Santiago de Chile. During my fourth year of studying, I was the winner of the Santander Mobility Scholarship (2016) that allowed me to study for a semester at the University of Seville in Spain in 2017. As a student I was also a Host for a TV pilot and I was a Contributor to a Newspaper.</p> <br></br>
                            
                        </div>
                    </div>
                </div>
            </FadeTransform>
        </div>

    )

}










export default Aboutcomponent;