import React, { Component } from 'react';
import { FadeTransform, Fade, Stagger, TransitionGroup, CSSTransition } from "react-transition-group";



class Project1 extends Component {



    render() {
    return (
        <div className="App">
        <TransitionGroup>
          <CSSTransition

            classNames="page"
            timeout={300}
          >
                <div class="container ">
                    <div class="row m-5" >
                        <div class="col-12 col-sm-6 mt-5">

                            <h1 >Project1<h1 className="textstrong">Argos Website</h1></h1>
                            <p className="d-sm-block ">Full Stack Development Student at <br></br>Nucamp Coding <em className='textstrong'>Bootcamp</em></p>
                            <a href="mailto:fpizarro.ux@gmail.com"><button type="button"  data-toggle="modal" data-target="#adoptapet" class="btn mt-4  btn-lg btn-outline-light">Contact</button></a>
                
                        </div>
                        <div class="col-sm-6 col-12 mt-4">
                                 
                              <h1 className="textstrong">Projects</h1>  

                            
                            <a to='/about' target="_blank" style={{ textDecoration: 'none' }}><h3>‣ Details </h3></a>

                            <a href='https://github.com/felipepizarro1/reactPortfolioProject' target="_blank" style={{ textDecoration: 'none' }}><h3>Technology Used</h3></a>

                            <a href='https://argoswebsite.netlify.app/' target="_blank" style={{ textDecoration: 'none' }}><h3>‣ Pets Website: Scrolling FX</h3></a>

                        </div>
                    </div>
                </div>
            </CSSTransition>
        </TransitionGroup>
        
        </div>
        );
        
    }
}

export default Project1;