import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import { getBikes } from '../actions/bikeActions';
import PropTypes from 'prop-types';
import MapMarker from './MapMarker';

class SimpleMap extends Component {

  static propTypes = {
    getBikes: PropTypes.func.isRequired,
    bike: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  }

  state = { 
    userLocation: { 
      lat: 47, 
      lng: 36  
    },
    zoom: 6,
    loading: true,
  };

  componentDidMount(props) {
    this.props.getBikes();
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
  }

  render() {

    const { bikes } = this.props.bike; 

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: 'calc(100vh - 56px)', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAMLnjKvBh549w3U_rGxg_GBKYHim-eZ9g' }}
          center={this.state.userLocation}
          zoom={this.state.zoom}
        >
          {bikes.map(({ _id, type, name, userLocation}) => (
            <MapMarker
              key={_id}
              lat={userLocation.lat}
              lng={userLocation.lng}
              name={name}
              type={type}
              id={_id}
            />
          ))}
        </GoogleMapReact>
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
  { getBikes }
)(SimpleMap);