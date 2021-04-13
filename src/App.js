import React, { Component } from 'react';
import AddressForm from './components/AddressForm/AddressForm';
import MapContainer from './components/MapContainer/MapContainer';
import './App.scss';


export class App extends Component {
  render() { 
  return (
    <div className="App">
      <header className="App-header">
        <AddressForm />
        <MapContainer />
      </header>

    </div>
  );
  }
}


export default App;
