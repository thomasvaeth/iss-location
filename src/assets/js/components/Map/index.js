// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Component } from 'react';
import axios from 'axios';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import mapStyles from './mapStyles.json';

// ----------------------------------------------
// Map
// ----------------------------------------------
const GoogleMapComponent = withScriptjs(withGoogleMap(props => (
  <GoogleMap defaultZoom={4} defaultCenter={props.position}>
    <Marker position={props.position} />
  </GoogleMap>
)));

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 47.6062,
      longitude: 122.3321
    }
  }

  componentDidMount() {
    this.latitudeLongitude();
  }

  latitudeLongitude() {
    axios.get('http://api.open-notify.org/iss-now.json')
      .then(response => {
        const data = response.data.iss_position;

        this.setState({
          latitude: parseInt(data.latitude, 10),
          longitude: parseInt(data.longitude, 10)
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const position = { lat: this.state.latitude, lng: this.state.longitude};

    return (
      <section className="iss">
        <GoogleMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpB847CA-on6p8wgXEnGDgR9ChvRbgLhI&v=3"
          defaultOptions={{ styles: mapStyles }}
          loadingElement={<div className="iss__map" />}
          containerElement={<div className="iss__map" />}
          mapElement={<div className="iss__map" />}
          position={position}
        />
      </section>
    );
  }
}
