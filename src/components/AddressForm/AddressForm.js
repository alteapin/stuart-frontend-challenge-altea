import React, { Component } from 'react';
import './AddressForm.scss';
import pickUpImageBlank from '../../../src/images/pickUpBadgeBlank.svg';
import dropOffImageBlank from '../../../src/images/dropOffBadgeBlack.svg';
import pickUpImageValid from '../../../src/images/pickUpBadgePresent.svg';
import dropOffImageValid from '../../../src/images/dropOffBadgePresent.svg';
import pickUpImageError from '../../../src/images/pickUpBadgeError.svg';
import dropOffImageError from '../../../src/images/dropOffBadgeError.svg';



class AddressForm extends Component {

    render() {
        const { onChange, onKeyUp, onClick, pickUpAddress, dropOffAddress, isValidPickUp, isValidDropOff } = this.props;
        const addNewClass = (isValidPickUp && isValidDropOff) ? 'button-form' : 'button-form disabled';
        const pickUpChangeIcon = 
        (isValidPickUp && !(pickUpAddress === '') ? pickUpImageValid 
        : !isValidPickUp && !(pickUpAddress === '') ? pickUpImageError 
        : pickUpImageBlank);
        const dropOffChangeIcon = 
        (isValidDropOff && !(dropOffAddress === '') ? dropOffImageValid 
        : !isValidDropOff && !(dropOffAddress === '') ? dropOffImageError 
        : dropOffImageBlank);

        return (
            <div className="form-container">
                <form>
                    <div>
                        <img className="form-image"
                         src={pickUpChangeIcon} alt="blank" /> 

                        <input className="input-address"
                            name='pickUpAddress'
                            placeholder='Pick up address'
                            value={pickUpAddress}
                            onChange={onChange} 
                            onKeyUp={onKeyUp}/>
                    </div>

                    <br />

                    <div>
                        <img className="form-image"
                            src={dropOffChangeIcon} alt="blank" /> 

                        <input className="input-address"
                            name='dropOffAddress'
                            placeholder='Drop off address'
                            value={dropOffAddress}
                            onChange={onChange}
                            onKeyUp={onKeyUp} />
                    </div>

                    <br />
                    <button 
                    className={addNewClass} 
                    disabled={!(isValidPickUp && isValidDropOff)}
                    onClick={onClick}
                    >Create a job</button>
                </form>
            </div>
        )
    }
}


export default AddressForm;