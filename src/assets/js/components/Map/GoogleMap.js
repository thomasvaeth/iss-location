// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import mapStyles from './mapStyles.json';
import mapIcon from '../../../images/iss.png';

// ----------------------------------------------
// Google Map
// ----------------------------------------------
export default withScriptjs(withGoogleMap(props => {
  const position = {
    lat: props.latitude, 
    lng: props.longitude
  };

  const mapOptions = {
    zoom: 4,
    minZoom: 3,
    center: position,
    mapTypeId: 'terrain',
    styles: mapStyles
  };

  const markerOptions = {
    position: position,
    icon: {
      url: mapIcon,
      scaledSize: new google.maps.Size(48, 48)
    }
  };

  return (
    <GoogleMap options={mapOptions}>
      <Marker options={markerOptions} />
    </GoogleMap>
  );
}));
