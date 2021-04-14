import React, { Component } from 'react';
import AddressForm from './components/AddressForm/AddressForm';
import MapContainer from './components/MapContainer/MapContainer';
import './App.scss';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickUpAdress: '',
      dropOffAdress: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log(this.state)

    this.setState({
      [event.target.name]: event.target.value
    });
  }


  render() { 
  return (
    <div className="App">
      <header className="App-header">
        <AddressForm onChange={this.handleInputChange}/>
        <MapContainer />
      </header>

    </div>
  );
  }
}


export default App;
