import React, { Component } from 'react';
import AddressForm from './components/AddressForm/AddressForm';
import MapContainer from './components/MapContainer/MapContainer';

import './App.scss';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickUpAdress:'',
      pickUpLatitude: '',
      pickUpLongitude:'',
      dropOffAddress: '',
      dropOffLatitude: '',
      dropOffLongitude: '',
    };

    this.handleGeocodeAddress = this.handleGeocodeAddress.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log('value', event.target.value)
    this.setState({
      [event.target.name]: event.target.value,
      fieldIsNotEmpty: true,
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
        field.name === 'pickUpAdress' ? this.setState({
          pickUpAdress: data.address,
          pickUpLatitude: data.latitude,
          pickUpLongitude: data.longitude
        }) : this.setState({
          dropOffAddress: data.address,
          dropOffLatitude: data.latitude,
          dropOffLongitude: data.longitude
        }); })

    
    event.preventDefault();
  }


  render() {
    const pickUpAdress = this.state.pickUpAdress;
    const dropOffAdress = this.state.dropOffAdress;

    return (
      <div className="App">
        <header className="App-header">
          <AddressForm 
          onChange={this.handleInputChange} 
          onBlur={this.handleGeocodeAddress} 
          pickUpAdress={pickUpAdress} 
          dropOffAdress={dropOffAdress} 
          />

          <MapContainer />
        </header>

      </div>
    );
  }
}


export default App;