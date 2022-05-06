import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MapComponent(){
  const defaultProps = {
    center: {
      lat: 20.848249,
      lng:  -86.876106
    },
    zoom: 18
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAm_8uIOHe0Gr1lpNueCHZOcawTLEvWfno" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={20.848249}
          lng={ -86.876106}
          text="Last Seen"
        />
      </GoogleMapReact>
    </div>
  );
}