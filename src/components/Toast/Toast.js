import React, { Component } from 'react';
import './Toast.scss';

class ToastContainer extends Component {
    render() {
        const { onClick, showToast, hideToast } = this.props
        
        return (
            <div>
                {!hideToast ? 
                <form onSubmit={this.handlesubmit}>
                    <input className="toast"
                        type="submit"
                        value="Job has been created successfully!"
                        onClick={onClick} />
                    {showToast ? <span></span> : null}
                </form>  
                : null}
            </div>
        );
    }
}

export default ToastContainer;