import React, { Component } from 'react';
import './AddressForm.scss';
import pickUpImage from '../../../src/images/pickUpBadgeBlank.svg';
import dropOffImage from '../../../src/images/dropOffBadgeBlack.svg';


class AddressForm extends Component {
    state = {
        pickUpAdress: '',
        dropOffAdress: ''
    }

    changeInputValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }

    render () {
        return (
            <div className="form-container">
            <form>
                <div>
                <img className="form-image"
                src={pickUpImage} alt="x"/>
                <input className="input-address"
                name='pickUpAdress' 
                placeholder='Pick up address'   
                value={this.state.pickUpAdress} 
                onChange={event => this.changeInputValue(event)}/>
                </div>

                <br />

                <div>
                <img className="form-image"
                src={dropOffImage} alt="x" />
                <input className="input-address"
                name='dropOffAdress'
                placeholder='Drop off address'
                value={this.state.dropOffAdress}
                onChange={event => this.changeInputValue(event)} />
                </div>

                <br />
            </form>
            </div>
        )
    }
}


export default AddressForm;