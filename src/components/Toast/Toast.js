import React, { Component } from 'react';
import './Toast.scss';

class ToastContainer extends Component {
    render() {
        const { onClick, showToast } = this.props
        return (
            <div >
                <form onSubmit={this.handlesubmit}>
                    <input className="toast" 
                    type="submit" 
                    value="Job has been created successfully!" 
                        onClick={onClick} />                    
                    {showToast ? <span></span> : null}
                </form> 
            </div>
        );
    }
}

export default ToastContainer;