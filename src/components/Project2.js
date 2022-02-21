import React, { Component } from 'react';
import { FadeTransform, Fade, Stagger} from 'react-animation-components';
import { Link } from 'react-router-dom';



class Project2 extends Component {


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
                        
                            <h1 >Portfolio<h1 className="textstrong">Website</h1></h1>
                            <p className="d-sm-block ">Personal project developed with <br></br><em className='textstrong'>React</em> and other technologies.</p>

                            <a href="https://github.com/felipepizarro1/reactPortfolioProject" target="_blank"><button type="button"  data-toggle="modal" data-target="#adoptapet" class="btn mt-4  btn-lg btn-outline-light">View Code</button></a>
                        
                        </div>
                        <div class="col-md-7 col-12 ">
                        <Stagger in>
                                <Fade in>   
    
                                <p>This is my Portfolio Website as you can see. It was designed and coded by me using <em className='textstrong'>React, Reactstrap and React Animations Components. </em></p>
                                </Fade>
                                <Fade in>
    
                                <p>It is designed with an UI inspired by current modern Streaming Services with <em className='textstrong'>dynamic animation styles.</em></p>
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
    

export default Project2;