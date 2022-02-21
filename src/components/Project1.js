import React, { Component } from 'react';
import { FadeTransform, Fade, Stagger} from 'react-animation-components';
import { Link } from 'react-router-dom';



class Project1 extends Component {


    render() {
    return (
        <div className="App">
            <FadeTransform
                    in
                    transformProps={{
                        exitTransform: 'scale(1) translateX(10%)'
                    }}>
            <div class="container ">
                <div class="row  ml-5 mt-3">
                    <Link className=" btn btn-social-icon " to='/' ><i className="fa fa-arrow-left" /></Link>{' '}
                </div>
                <div class="row ml-5 mr-5 mt-5 mb-5" >
                    <div class="col-12 col-md-5 mt-1 mb-4" >
                    
                        <h1 >Pets Website<h1 className="textstrong">Scrolling FX</h1></h1>
                        <p className="d-sm-block ">Project created for the Nucamp's <br></br><em className='textstrong'>Bootstrap Course</em></p>
                        <a href="https://argospets.netlify.app/" target="_blank"><button type="button"  data-toggle="modal" data-target="#adoptapet" class="btn mt-4 mr-2 btn-lg btn-outline-light">View Live</button></a>
                        <a href="https://github.com/felipepizarro1/argos-website" target="_blank"><button type="button"  data-toggle="modal" data-target="#adoptapet" class="btn mt-4  btn-lg btn-outline-light">View Code</button></a>
                    
                    </div>
                    <div class="col-md-7 col-12 ">
                    <Stagger in>
                            <Fade in>   

                            <p>This simple Scrolling FX project was created for the <em className='textstrong'>Bootstrap Course </em>of the Bootcamp. Designed to be responsive and animated, I added the Animate on Scroll Library in order to create a more <em className='textstrong'>dynamic UI.</em></p>
                            </Fade>
                            <Fade in>

                            <p>Inspired by PetFinder, I added a <em className='textstrong'>colorful design </em>with vectors to give a different approach. It is design focus, and the modals are representatives of the desired functions.</p>
                            </Fade>
                    </Stagger>
                    </div>
                </div>
            </div>
            </FadeTransform>
        </div>
        ); 
    }
}

export default Project1;