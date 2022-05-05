import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 20.84773713098244, 
  lng: -86.87586050864266,
};

class MapComponent extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="API_KEY"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default MapComponent;