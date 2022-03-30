import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class Footercomponent extends Component {
    constructor(props) {
        super(props);
        this.state = { isModalOpen: false };

        this.toggleModal = this.toggleModal.bind(this);

    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render() {

    return(
        <div className="App">
            <div className='container d-flex justify-content-end fixed-bottom'>
                <div className='row'>
                    <div className='sm-col-12 mr-5 '>
                    <Button outline color='transparent' size="sm" onClick={this.toggleModal}>
                        <h3 className='supersmall'>Design by Felipe Pizarro 2022</h3>
                    </Button>
                    </div>
                </div>
            </div>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader className="modalfooterheader" toggle={this.toggleModal}>Felipe Pizarro 2022</ModalHeader>
                <ModalBody className="modalfooterbody">
                <div className='container d-flex'>
                    <div className='row'>
                        <div class="col-sm-12" data-aos="fade-right">
                        <p>Hi! I'm developing new <em className='textstrong'>React projects </em>to soon showcase them in my portfolio. Thanks for reading!</p>
                        </div>
                        <div class="col-md-12 d-flex justify-content-center">
                            <a href="https://www.linkedin.com/in/felipepizarrodev"><button type="button" className="btn mt-2 mb-3   btn-md btn-dark">LinkedIn Profile</button></a>
                            <a href="mailto:fpizarro.ux@gmail.com"><button type="button"  className="btn mt-2 mb-3 ml-3  btn-md btn-dark">Contact</button></a>
                            <a href="https://github.com/felipepizarro1"><button type="button" className="btn mt-2 mb-3 ml-3  btn-md btn-dark">GitHub Profile</button></a>
                            
                        </div>
                    </div>
                </div>
                </ModalBody>
             </Modal>
        </div>

    )
}
}

export default Footercomponent;