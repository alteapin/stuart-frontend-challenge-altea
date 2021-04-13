import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyle = {
    position: 'relative',
    width: '100%',
    height: '100%'
}

export class MapContainer extends Component {
    render() {
        return (
            <Map 
            google={this.props.google} 
            zoom={14} 
            style={mapStyle}
            initialCenter={
                {
                    lat: -1.2884,
                    lng: 36.8233
                }
            }>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC2EOuV5biP5dtQDo9h87O9teXTtaP_JYw'
})(MapContainer);