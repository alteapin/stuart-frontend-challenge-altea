import React, { Component } from 'react';
import AddressForm from './components/AddressForm/AddressForm';
import MapContainer from './components/MapContainer/MapContainer';

import './App.scss';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      latitude:'',
      longitude:'',
      isValidAddress:'',
      pickUpAdress: '',
      dropOffAdress: ''
    };

    this.handleGeocodeAddress = this.handleGeocodeAddress.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log('value', event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleGeocodeAddress(event) {
    const responseApi = fetch('https://stuart-­frontend-­challenge.now.sh/geocode', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address: event.target.value
      })
    });
    responseApi
      .then(response => response.json())
      .then(data => this.setState({ 
        address: data.address,
        latitude: data.latitude,
        longitude:data.longitude
      }));
    event.preventDefault();
  }


  render() {
    console.log('latitude', this.state.address)
    const pickUpAdress = this.state.pickUpAdress;
    const dropOffAdress = this.state.dropOffAdress;

    return (
      <div className="App">
        <header className="App-header">
          <AddressForm onChange={this.handleInputChange} onBlur={this.handleGeocodeAddress} pickUpAdress={pickUpAdress} dropOffAdress={dropOffAdress} />
          <MapContainer />
        </header>

      </div>
    );
  }
}


export default App;