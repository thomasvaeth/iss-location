// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import mapStyles from './mapStyles.json';

// ----------------------------------------------
// Google Map
// ----------------------------------------------
export default withScriptjs(withGoogleMap(props => {
  const center = {
    lat: props.latitude, 
    lng: props.longitude
  };

  const mapOptions = {
    zoom: 4,
    center: center,
    mapTypeId: 'terrain',
    styles: mapStyles
  };

  return (
    <GoogleMap options={mapOptions}>
      <Marker position={center} />
    </GoogleMap>
  );
}));
