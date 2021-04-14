import React, { Component } from 'react';
import './AddressForm.scss';
import pickUpImageBlank from '../../../src/images/pickUpBadgeBlank.svg';
import dropOffImageBlank from '../../../src/images/dropOffBadgeBlack.svg';


class AddressForm extends Component {

    render () {
        const { onChange, pickUpAdress, dropOffAdress } = this.props;
        return (
            <div className="form-container">
            <form>
                <div>
                <img className="form-image"
                src={pickUpImageBlank} alt="x"/>
                <input className="input-address"
                name='pickUpAdress' 
                placeholder='Pick up address'   
                value={pickUpAdress} 
                onChange={onChange}/>
                </div>
                
                <br />

                <div>
                <img className="form-image"
                src={dropOffImageBlank} alt="x" />
                <input className="input-address"
                name='dropOffAdress'
                placeholder='Drop off address'
                value={dropOffAdress}
                onChange={onChange} />
                </div>

                <br />
                <button className="button-form">Create a job</button>
            </form>
            </div>
        )
    }
}


export default AddressForm;