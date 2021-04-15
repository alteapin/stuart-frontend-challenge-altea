import React, { Component } from 'react';
import AddressForm from './components/AddressForm/AddressForm';
import MapContainer from './components/MapContainer/MapContainer';

import './App.scss';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickUpAddress:'',
      dropOffAddress:'',

      geocodedPickUpAddress:'',
      pickUpLatitude: '',
      pickUpLongitude:'',

      geocodedDropOffAddress: '',
      dropOffLatitude: '',
      dropOffLongitude: '',

      isValidPickUp: false,
      isValidDropOff: false
    };

    this.handleGeocodeAddress = this.handleGeocodeAddress.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleGeocodeAddress(event) {
    const field = event.target;
    const responseApi = fetch('https://stuart-­frontend-­challenge.now.sh/geocode', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address: field.value
      })
    });
    responseApi
      .then(response => response.json())
      .then(data => {
        field.name === 'pickUpAddress' ? this.setState({
          geocodedPickUpAddress: data.address,
          pickUpLatitude: data.latitude,
          pickUpLongitude: data.longitude,
          isValidPickUp: true
        }) : this.setState({
          geocodedDropOffAddress: data.address,
          dropOffLatitude: data.latitude,
          dropOffLongitude: data.longitude,
          isValidDropOff: true
        }); })
    console.log('response', responseApi)
    event.preventDefault();
  }


  render() {
    console.log('latitude', this.state.pickUpLatitude)
    console.log('prueba', this.state.geocodedPickUpAddress)
    const pickUpAddress = this.state.pickUpAddress;
    const dropOffAddress = this.state.dropOffAddress;
    const geocodedPickUpAddress = this.state.geocodedPickUpAddress;
    const geocodedDropOffAddress = this.state.geocodedDropOffAddress;
    const pickUpLatitude = this.state.pickUpLatitude;
    const pickUpLongitude = this.state.pickUpLongitude;
    const dropOffLatitude = this.state.dropOffLatitude;
    const dropOffLongitude = this.state.dropOffLongitude
    const isValidPickUp = this.state.isValidPickUp;
    const isValidDropOff = this.state.dropOffAddress;




    return (
      <div className="App">
        <header className="App-header">
          <AddressForm    
          onChange={this.handleInputChange} 
          onBlur={this.handleGeocodeAddress} 
          pickUpAddress={pickUpAddress}
          dropOffAddress={dropOffAddress} 
          geocodedPickUpAddress={geocodedPickUpAddress}
          geocodedDropOffAddress={geocodedDropOffAddress}
          isValidPickUp={isValidPickUp}
          isValidDropOff={isValidDropOff}
          />

          <MapContainer 
            pickUpLatitude={pickUpLatitude}
            pickUpLongitude={pickUpLongitude}
            dropOffLatitude={dropOffLatitude}
            dropOffLongitude={dropOffLongitude}
          />
        </header>

      </div>
    );
  }
}


export default App;