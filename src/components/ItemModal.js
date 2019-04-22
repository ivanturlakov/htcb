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
import { addItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ItemModal extends Component {
  state = {
    modal: false,
    name: 'Some Title',
    category: 'MTB',
    content: 'Some Content',
    img: 'https://www.syncron.com/wp-content/uploads/2017/03/img-placeholder.png'
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool
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

    const newItem = {
      name: this.state.name,
      category: this.state.category,
      content: this.state.content,
      img: this.state.img
    };

    // Add item via addItem action
    this.props.addItem(newItem);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Button
            className='btn-lg'
            color='success'
            style={{ marginBottom: '2rem', marginTop: '2rem' }}
            onClick={this.toggle}
          >
            Add Item
          </Button>
        ) : null}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-lg">
          <ModalHeader toggle={this.toggle}>Add Item</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='name'>Name</Label>
                <Input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Add Name'
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>  
                <Label for='category'>Category</Label>
                <Input 
                  type='select' 
                  name='category' 
                  id='category' 
                  multiple
                  placeholder='Add Category'
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
                  placeholder='Add Content'
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup> 
                <Label for='img'>Image</Label> 
                <Input
                  type='text'
                  name='img'
                  id='img'
                  placeholder='Add Img URL'
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
                  Add Item
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
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);