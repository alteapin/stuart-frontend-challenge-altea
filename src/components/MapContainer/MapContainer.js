import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import pickUpMarker from '../../../src/images/pickUpMarker.svg';
import dropOfMarker from '../../../src/images/dropOffMarker.svg';


const mapStyle = {
    position: 'relative',
    width: '100%',
    height: '100%'
}

export class MapContainer extends Component {
    render() {
        const { pickUpLatitude, pickUpLongitude, dropOffLatitude, dropOffLongitude } = this.props;
        return (
            <Map 
            google={this.props.google} 
            zoom={14} 
            style={mapStyle}
            center={
                {
                    lat: pickUpLatitude, 
                    lng: pickUpLongitude
                }
            }
            initialCenter={
                {
                    lat: 48.86982,
                    lng: 2.334579
                }
            }
            >

            <Marker onClick={this.onMarkerClick}
            name={'Current location'} 
            position={{ lat: pickUpLatitude, lng: pickUpLongitude}}
            icon={{ url: pickUpMarker }}
            />
            
            <Marker onClick={this.onMarkerClick}
            name={'Current location'}
            position={{ lat: dropOffLatitude, lng: dropOffLongitude }}
            icon={{ url: dropOfMarker }}
            />

            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC2EOuV5biP5dtQDo9h87O9teXTtaP_JYw'
})(MapContainer);