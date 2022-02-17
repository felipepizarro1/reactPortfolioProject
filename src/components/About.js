import React, { Component } from 'react';
import { FadeTransform } from 'react-animation-components';


var imgfelipe = require('../FELIPE-IMAGE3.png');

function Aboutcomponent () {
    return(
        <div className="App">
            <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.9) translateY(60%)'
            }}>
                <div class="container ">
                    <div className="row mt-5 mr-5 ml-5 mb-2" >
                        <div className="col-sm-10 mt-2">
                            <h1 className="textstrong mb-4"> About Me</h1>
                            <p className='d-sm-block '>Hi, I'm Felipe, a graduate of Full Stack Development from Nucamp Coding Bootcamp based in Milan, Italy. In 2020, I graduated in communication sciences in Chile, at the UNIACC University and worked as a journalist for a year and a half doing scientific dissemination at the ALMA Observatory and as a video editor at private E-learning agencies.</p>  
                            
                        </div>
                        <div className="col-sm-2 mt-2">
                             <img  width={200} src={imgfelipe} />
                        </div>
                    </div>
                    <div className="row mt-2 mr-5 ml-5 mb-2" >
                        <div class="col-sm-12" data-aos="fade-right">
                            <p className="d-sm-block ">However, it was due to the pandemic that it was difficult for me to continue to be involved in my work in communications. This is how I came to the conclusion of making a career change towards the technological area, more specifically in the area of ​​software development, a personal interest that I always had but had not projected as serious until that moment.<em className='textstrong'>Bootcamp</em></p>
                            <p className="d-sm-block ">While moving to Italy for family reasons, I started studying the basics of UX/UI through Georgia Tech's professional Human Computer Interaction program and HTML/CSS through the many tutorials on Youtube and FreeCodeCamp. I also polished my graphic design skills with UI prototypes in Photoshop and Adobe XD.<em className='textstrong'>Bootcamp</em></p>
                        </div>
                    </div>
                </div>
            </FadeTransform>
        </div>

    )

}










export default Aboutcomponent;