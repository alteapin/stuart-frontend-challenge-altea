import React, { Component } from 'react';
import './AddressForm.scss';
import pickUpImageBlank from '../../../src/images/pickUpBadgeBlank.svg';
import dropOffImageBlank from '../../../src/images/dropOffBadgeBlack.svg';
import pickUpImageValid from '../../../src/images/pickUpBadgePresent.svg';
import dropOffImageValid from '../../../src/images/dropOffBadgePresent.svg';



class AddressForm extends Component {

    render() {
        const { onChange, onBlur, pickUpAdress, dropOffAdress } = this.props;
        return (
            <div className="form-container">
                <form>
                    <div>
                        <img className="form-image"
                        src={pickUpImageBlank} alt="blank"/> 
                        
                        <input className="input-address"
                            name='pickUpAdress'
                            placeholder='Pick up address'
                            value={pickUpAdress}
                            onChange={onChange} 
                            onBlur={onBlur}/>
                    </div>

                    <br />

                    <div>
                     
                        <img className="form-image"
                        src={dropOffImageBlank} alt="blank" /> 

                        <input className="input-address"
                            name='dropOffAdress'
                            placeholder='Drop off address'
                            value={dropOffAdress}
                            onChange={onChange}
                            onBlur={onBlur} />
                    </div>

                    <br />
                    <button className="button-form">Create a job</button>
                </form>
            </div>
        )
    }
}


export default AddressForm;