import React, { Component } from 'react';

function Homecomponent() {
    return (
        <div className="App">
            <div class="container ">
                <div class="row m-5" >
                    <div class="col-sm-6 mt-5" data-aos="fade-right">
                        <h1 >Hello there! I'm Felipe</h1>
                        <h2 class="d-none d-sm-block">Full Stack Developer Student</h2>
                        <button type="button" data-toggle="modal" data-target="#adoptapet" class="btn mt-4  btn-lg btn-outline-light">Contact</button>

                    </div>
                    <div class="col-6 mt-2">
                        <h1>Current Projects</h1>
        
                        <a href='https://argoswebsite.netlify.app/' target="_blank"><h3>‣ Argos Website: Pet Finder Project</h3></a>
                    </div>
                </div>
            </div>
        </div>
    )
  }





export default Homecomponent;