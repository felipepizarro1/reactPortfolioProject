import React, { Component } from 'react';

function Homecomponent() {
    return (
        <div className="App">
            <div class="container ">
                <div class="row m-5" >
                    <div class="col-sm-6 mt-5" data-aos="fade-right">
                        <h1 >Hello There!<h1 className="textstrong">I'm Felipe Pizarro</h1></h1>
                        <p className="d-none d-sm-block ">Full Stack Developer Student at <br></br>Nucamp Coding <em className='textstrong'>Bootcamp</em></p>
                        <a href="mailto:fpizarro.ux@gmail.com"><button type="button"  data-toggle="modal" data-target="#adoptapet" class="btn mt-4  btn-lg btn-outline-light">Contact</button></a>
                    </div>
                    <div class="col-6 mt-2">
                        <h1>Current Projects</h1>
        
                        <a href='https://argoswebsite.netlify.app/' target="_blank" style={{ textDecoration: 'none' }}><h3>‣ Argos: PetFinder Redesign Project</h3></a>
                    </div>
                </div>
            </div>
        </div>
    )
  }





export default Homecomponent;