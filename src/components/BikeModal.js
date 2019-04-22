import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Badge
} from 'reactstrap';
import { connect } from 'react-redux';
import { addBike } from '../actions/bikeActions';
import PropTypes from 'prop-types';

class BikeModal extends Component {

  state = {
    modal: false,
    name: this.props.name,
    type: this.props.type,
    frame: this.props.frame,
    transmission: this.props.transmission,
    brakes: this.props.brakes,
    suspension: this.props.suspension,
    build: this.props.build,
    userLocation: { 
      lat: 0, 
      lng: 0 
    },
    loading: true,
    success: false 
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  toggle = () => {

    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );

    this.setState({
      modal: !this.state.modal,
      name: this.props.name,
      type: this.props.type,
      frame: this.props.frame,
      transmission: this.props.transmission,
      brakes: this.props.brakes,
      suspension: this.props.suspension,
      build: this.props.build
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newBike = {
      name: this.state.name,
      type: this.state.type,
      frame: this.state.frame,
      transmission: this.state.transmission,
      brakes: this.state.brakes,
      suspension: this.state.suspension,
      build: this.state.build,
      userLocation: { 
        lat: this.state.userLocation.lat, 
        lng: this.state.userLocation.lng 
      },
    };

    // Add item via addItem action
    this.props.addBike(newBike);

    // Show success
    setTimeout(this.setState({success: true,}), 1000);

    // Close modal
    setTimeout(this.toggle, 2000);

  };

  render() {
    return (
      <div>
        <Button
          className='btn-sm mb-1'
          color='success'
          onClick={this.toggle}
          disabled={(this.props.type === null) || (this.props.build === null)}
        >
          Add Build To Map!
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-sm">
          <ModalHeader toggle={this.toggle}>Add Build to Map</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='name'>Name</Label>
                <Input
                  type='text'
                  name='name'
                  id='name'
                  placeholder={this.props.name}
                  defaultValue={this.props.name}
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <p>
                  Bike <Badge color="dark" className="float-right">{this.props.type}</Badge><br />
                  Frame <Badge color="dark" className="float-right">{this.props.frame}</Badge><br />
                  Brakes <Badge color="dark" className="float-right">{this.props.brakes}</Badge><br />
                  Transmission <Badge color="dark" className="float-right">{this.props.transmission}</Badge><br />
                  Suspension <Badge color="dark" className="float-right">{this.props.suspension}</Badge><br />
                  Build <Badge color="dark" className="float-right">{this.props.build}</Badge><br />
                </p>
              </FormGroup>
              <FormGroup>  
                <Button 
                  className="btn-lg" 
                  color='success'
                  style={{ marginTop: '2rem' }} 
                  block
                >
                  { this.state.success ? 'Your Bike Added!' : 'Add Bike' }
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
  bike: state.bike,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { addBike }
)(BikeModal);