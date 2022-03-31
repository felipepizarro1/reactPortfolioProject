import React, { Component } from 'react';
import { FadeTransform, Fade, Stagger, } from 'react-animation-components';


var imgfelipe = require('../FELIPE-IMAGE3.png');
var imgcomputer = require('../NOTEBOOK-3.png');

function Aboutcomponent () {
    return(
        <div className="App">
            <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.9) translateY(15%)'
            }}>
                <div class="container ">
                    <div className="row mt-3 mr-5 ml-5 mb-2" >
                        <div className="col-md-12 mt-2">
                            <h1 className="textstrong mb-4"> About Me</h1>
                            <p className='d-sm-block '>Hi, I'm Felipe, a graduate in Full Stack Development from <em className='textstrong'>Nucamp Coding Bootcamp </em>based in Milan, Italy. In 2020, I graduated in Social Communications in Chile, at the UNIACC University and worked as a journalist for two years doing scientific dissemination at the ALMA Observatory and as a Video Editor at private E-learning agencies.</p> 

                            <p className="d-sm-block ">However, it was due to the pandemic that it was difficult for me to continue to be involved in this path. This is how I came to the conclusion of making a career change towards IT, more specifically into <em className='textstrong'> ​​Software Development,</em> a personal interest that I always had but had not projected as serious until that moment.</p>

                            <p className="mt-4 d-sm-block ">While moving to Italy for family reasons, I started studying the basics of <em className='textstrong'>UX/UI </em>through Georgia Tech's professional Human Computer Interaction program and HTML/CSS through the many tutorials on Youtube and FreeCodeCamp. I also polished my graphic design skills with UI prototypes in Photoshop and Adobe XD.</p>

                            <p className="d-sm-block mt-2 ">It was in October 2021 that I decided to fully commit to this path by enrolling in the <em className='textstrong'>Full Stack Development program</em> of Nucamp Coding Bootcamp, an intense and challenging plan where I was able to learn various Web development technologies. Currently I use these: <em className='textstrong'>React, React Native, Javascript (ES6), Bootstrap, HTML/CSS.</em></p>

                            <p className="mt-4 d-sm-block ">My goal is to work remotely with an English, Italian or Spanish speaking team, but don't really have a problem with relocation. I would love to find a position as a React developer with opportunities to grow and learn. I will return the trust with hard work. I'm also a firm believer that <em className='textstrong'>practice makes perfect.</em></p>
                            
                        </div>

                    </div>
                    <div className="row mt-2 mr-5 ml-5 mb-2" >
                        <div class="col-sm-12" >
                            
                            
                        </div>
                    </div>
                    <div className="row mr-5 ml-5 mb-1" >
                        <div className="col-lg-2 col-sm-12 mt-2 " >
                            <img className="ml-1 " width={130} src={imgcomputer} />
                        </div>
                        <div class="col-lg-10  col-sm-12">
                            
                        </div>
                    </div>
                    <div className="row  mr-5 ml-5 mb-2" >
                        <div class="col-md-12">
                            
                        </div>
                    </div>
                    <div className="row mt-4 mr-5 ml-1 mb-2" >
                        <div class="col-md-12 d-flex justify-content-center">
                            <a href="https://www.linkedin.com/in/felipepizarrodev"><button type="button" className="btn mt-2 mb-3   btn-lg btn-dark">LinkedIn Profile</button></a>
                            <a href="mailto:fpizarro.ux@gmail.com"><button type="button"  className="btn mt-2 mb-3 ml-3  btn-lg btn-dark">Contact</button></a>
                            <a href="https://github.com/felipepizarro1"><button type="button" className="btn mt-2 mb-3 ml-3  btn-lg btn-dark">GitHub Profile</button></a>
                            
                        </div>
                    </div>
                </div>
            </FadeTransform>
        </div>

    )

}










export default Aboutcomponent;