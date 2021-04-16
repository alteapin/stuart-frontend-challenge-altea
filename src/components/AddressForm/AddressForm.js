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
        const { onChange, onBlur, onClick, pickUpAddress, dropOffAddress, geocodedPickUpAddress, geocodedDropOffAddress, isValidPickUp, isValidDropOff } = this.props;
        const addNewClass = (isValidPickUp && isValidDropOff) ? 'button-form' : 'button-form disabled';
        console.log('pick', isValidPickUp);
        console.log('drop', isValidDropOff);
        return (
            <div className="form-container">
                <form>
                    <div>
                        {pickUpAddress === geocodedPickUpAddress && !(pickUpAddress === '') ?
                            <img className="form-image"
                            src={pickUpImageValid} alt="blank" /> 

                            : !(pickUpAddress === geocodedPickUpAddress) && !(pickUpAddress === '') ?
                            <img className="form-image"
                            src={pickUpImageError} alt="blank" /> 

                            : 
                            <img className="form-image"
                            src={pickUpImageBlank} alt="blank" /> 
                          }
                        

                        <input className="input-address"
                            name='pickUpAddress'
                            placeholder='Pick up address'
                            value={pickUpAddress}
                            onChange={onChange} 
                            onBlur={onBlur}/>
                    </div>

                    <br />

                    <div>
                        {dropOffAddress === geocodedDropOffAddress && dropOffAddress !== ''
                            ?
                            <img className="form-image"
                                src={dropOffImageValid} alt="blank" />

                            : dropOffAddress !== geocodedDropOffAddress && dropOffAddress !== '' ?
                                <img className="form-image"
                                    src={dropOffImageError} alt="blank" />

                                :
                                <img className="form-image"
                                    src={dropOffImageBlank} alt="blank" />
                        }

                        <input className="input-address"
                            name='dropOffAddress'
                            placeholder='Drop off address'
                            value={dropOffAddress}
                            onChange={onChange}
                            onBlur={onBlur} />
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