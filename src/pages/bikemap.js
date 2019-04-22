import React, { Component } from 'react';
import GoogleMap from '../components/GoogleMap';

class BikeMap extends Component {
  render() {
    return (
      <div className="App">
        <GoogleMap/>
      </div>
    );
  }
}

export default BikeMap;