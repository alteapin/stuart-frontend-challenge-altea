import React, { Component } from 'react';
import AddressForm from './components/AddressForm/AddressForm';
import MapContainer from './components/MapContainer/MapContainer';
import Toast from './components/Toast/Toast';

import './App.scss';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickUpAddress:'',
      dropOffAddress:'',

      pickUpLatitude: '',
      pickUpLongitude:'',

      dropOffLatitude: '',
      dropOffLongitude: '',

      isValidPickUp: false,
      isValidDropOff: false,

      requestCompleted: false
    };

    this.handleGeocodeAddress = this.handleGeocodeAddress.bind(this);
    this.handleCreateJob = this.handleCreateJob.bind(this);
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
          field.name === 'pickUpAddress' && data.code === 'GEOCODE_ERROR' ? 
            this.setState({
              isValidPickUp: false
              }) 
        : field.name === 'pickUpAddress' && data.code !== 'GEOCODE_ERROR' ? 
              this.setState({
                pickUpLatitude: data.latitude,
                pickUpLongitude: data.longitude,
                isValidPickUp: true
              }) 
        : field.name === 'dropOffAddress' && data.code === 'GEOCODE_ERROR' ? 
              this.setState({
                isValidDropOff: false
              }) 
        : field.name === 'dropOffAddress' && data.code !== 'GEOCODE_ERROR' ? 
              this.setState({
                dropOffLatitude: data.latitude,
                dropOffLongitude: data.longitude,
                isValidDropOff: true
                }) 
           : console.log('error')
        ; })

    
    event.preventDefault();
  }

  handleCreateJob(event) {
    const pickUpAddress = this.state.pickUpAddress
    const dropOffAddress = this.state.dropOffAddress
    const responseApi = fetch('https://stuart-­frontend-­challenge.now.sh/jobs', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pickup: pickUpAddress,
        dropoff: dropOffAddress
      })
    });

    responseApi
      .then(response => response.json())
      .then(this.setState({
        requestCompleted: true
        }) 
      )

    event.preventDefault();
  }

  render() {

    const pickUpAddress = this.state.pickUpAddress;
    const dropOffAddress = this.state.dropOffAddress;
    const pickUpLatitude = this.state.pickUpLatitude;
    const pickUpLongitude = this.state.pickUpLongitude;
    const dropOffLatitude = this.state.dropOffLatitude;
    const dropOffLongitude = this.state.dropOffLongitude
    const isValidPickUp = this.state.isValidPickUp;
    const isValidDropOff = this.state.isValidDropOff;
    const requestCompleted = this.state.requestCompleted;

    return (
      <div className="App">
        <header className="App-header">
          <AddressForm    
          onChange={this.handleInputChange} 
          onBlur={this.handleGeocodeAddress}
          onClick={this.handleCreateJob} 
          pickUpAddress={pickUpAddress}
          dropOffAddress={dropOffAddress} 
          isValidPickUp={isValidPickUp}
          isValidDropOff={isValidDropOff}
          />
          <MapContainer
            pickUpLatitude={pickUpLatitude}
            pickUpLongitude={pickUpLongitude}
            dropOffLatitude={dropOffLatitude}
            dropOffLongitude={dropOffLongitude}
          /> 
          {requestCompleted ?
          <Toast 
              isOpen={requestCompleted}/>
          : null }
        </header>

      </div>
    );
  }
}


export default App;