import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { editItem } from '../actions/itemActions';

class ItemModalEdit extends Component {
  state = {
    modal: false,
    id: this.props.id,
    name: this.props.name,
    category: this.props.category,
    content: this.props.content,
    img: this.props.img,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const editedItem = {
      _id: this.props.id,
      name: this.state.name,
      category: this.state.category,
      content: this.state.content,
      img: this.state.img,
      date: Date.now

    };

    const EditId = this.props.id;

    // Edit item via editItem action
    this.props.editItem(EditId, editedItem);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          className='btn-sm edit-item'
          color='primary'
          onClick={this.toggle}
        >
          Edit
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-lg">
          <ModalHeader toggle={this.toggle}>Edit Item</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='name'>Name</Label>
                <Input
                  type='text'
                  name='name'
                  id='name'
                  defaultValue={this.props.name}
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>  
                <Label for='category'>Category</Label>
                <Input 
                  type='select' 
                  name='category' 
                  id='category' 
                  defaultValue={this.props.category}
                  onChange={this.onChange}
                  >
                    <option>City</option>
                    <option>Road</option>
                    <option>MTB</option>
                    <option>FAQ</option>
                </Input>
              </FormGroup>
              <FormGroup>  
                <Label for='content'>Content</Label>
                <Input
                  type='textarea'
                  rows='10'
                  name='content'
                  id='content'
                  defaultValue={this.props.content}
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup> 
                <Label for='content'>Image</Label>
                <Input
                  type='text'
                  name='img'
                  id='img'
                  defaultValue={this.props.img}
                  onChange={this.onChange}
                />
                <div className="mt-3">
                  <img src={this.state.img} width="200" alt="Actual IMG"/>
                </div>
              </FormGroup>
              <FormGroup>  
                <Button
                  className="btn-lg" 
                  color='success' 
                  style={{ marginTop: '2rem' }} 
                  block
                  >
                  Edit
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  itemEdited: state.itemEdited,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { editItem }
)(ItemModalEdit);