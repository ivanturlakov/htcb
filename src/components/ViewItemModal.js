import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Media
} from 'reactstrap';
import renderHTML from './RenderHtml';

class ViewItemModal extends Component {

  state = {
    modal: false,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div>
        <Button
          className="btn-sm"
          color='dark'
          onClick={this.toggle}
        >
          Read More
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-lg">
          <ModalHeader toggle={this.toggle}>{this.props.name}</ModalHeader>
          <ModalBody>
            <Media object src={this.props.img} width="100%" className="mb-3 align-self-center" alt="Generic placeholder image" />
            {/* <p>{this.props.content}</p> */}
            {renderHTML(this.props.content)}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ViewItemModal;