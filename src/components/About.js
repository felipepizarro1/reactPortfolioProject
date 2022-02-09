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
                        <div className="col-sm-12 mt-2">
                            <h1 className="textstrong mb-4"> About Me</h1>
                            <p className='d-sm-block'>I'm Felipe Pizarro, a graduate of Social Communications and Professional Journalism of the UNIACC University of Santiago de Chile. During my fourth year of studying, I was the winner of the Santander Mobility Scholarship (2016) that allowed me to study for a semester at the University of Seville in Spain in 2017. As a student I was also a Host for a TV pilot and I was a Contributor to a Newspaper.</p>  
                        </div>
                    </div>
                    <div className="row m-5" >
                        <div class="col-sm-12" data-aos="fade-right">
                            <p className="d-none d-sm-block ">I have 2 years of experience in creating digital content. I worked as an intern and later as a Video Editor at the ALMA Observatory, disseminating scientific knowledge in an audiovisual format. I also worked in a private organization  called CCDO, where I created E-learning courses to train both workers and entrepreneurs of different backgrounds .<em className='textstrong'>Bootcamp</em></p>
                        </div>
                    </div>
                </div>
            </FadeTransform>
        </div>

    )

}










export default Aboutcomponent;