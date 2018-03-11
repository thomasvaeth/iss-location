// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Component } from 'react';
import GoogleMap from './GoogleMap';
import axios from 'axios';

// ----------------------------------------------
// Map
// ----------------------------------------------
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

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.latitudeLongitude();
      }
    });
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
    return (
      <section className="iss">
        <GoogleMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpB847CA-on6p8wgXEnGDgR9ChvRbgLhI&v=3"
          loadingElement={<div className="iss__loading" />}
          containerElement={<div className="iss__container" />}
          mapElement={<div className="iss__map" />}
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />
      </section>
    );
  }
}
