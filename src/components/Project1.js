import React, { Component } from 'react';
import { FadeTransform, Fade, Stagger} from "react-transition-group";
import { Link } from 'react-router-dom';



class Project1 extends Component {



    render() {
    return (
        <div className="App">


                <div class="container ">

                    <div class="row ml-5 mt-3">
                        <Link className="btn btn-social-icon" to='/' ><i className="fa fa-arrow-left" /></Link>{' '}
                    </div>
                    <div class="row m-5" >
                    
                        <div class="col-12 col-sm-5 mt-1" >


                            <h1 >Project1<h1 className="textstrong">Argos Website</h1></h1>
                            <p className="d-sm-block ">Full Stack Development Student at <br></br>Nucamp Coding <em className='textstrong'>Bootcamp</em></p>
                            <a href="mailto:fpizarro.ux@gmail.com"><button type="button"  data-toggle="modal" data-target="#adoptapet" class="btn mt-4 mr-2 btn-lg btn-outline-light">View Live</button></a>
                            <a href="https://github.com/felipepizarro1/argos-website" target="_blank"><button type="button"  data-toggle="modal" data-target="#adoptapet" class="btn mt-4  btn-lg btn-outline-light">View Code</button></a>

                
                        </div>
                        <div class="col-sm-7 col-12">

                              <p>I'm Felipe Pizarro, a graduate of Social Communications and Professional Journalism of the UNIACC University of Santiago de Chile. During my fourth year of studying, I was the winner of the Santander Mobility Scholarship (2016) that allowed me to study for a semester at the University of Seville in Spain in 2017. As a student I was also a Host for a TV pilot and I was a Contributor to a Newspaper.</p>

                              <p>I have 2 years of experience in creating digital content. I worked as an intern and later as a Video Editor at the ALMA Observatory, disseminating scientific knowledge in an audiovisual format. I also worked in a private organization  called CCDO, where I created E-learning courses to train both workers and entrepreneurs of different backgrounds .</p>
       



                        </div>
                    </div>
                    
                </div>

        </div>
        );
        
    }
}

export default Project1;