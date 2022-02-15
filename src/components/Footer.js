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
                    <Button outline onClick={this.toggleModal}>
                        <h3 className='supersmall'>Design by Felipe Pizarro 2022</h3>
                    </Button>
                    </div>
                </div>
            </div>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader className="modalfooterheader" toggle={this.toggleModal}>React Portfolio</ModalHeader>
                <ModalBody className="modalfooterbody">
                    <p>Hello I'm Felipondrious</p>
                </ModalBody>
             </Modal>
        </div>

    )
}
}

export default Footercomponent;