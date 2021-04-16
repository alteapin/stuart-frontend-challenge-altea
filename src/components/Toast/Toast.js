import React, { Component } from 'react';
import './Toast.scss';

class ToastContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showToast: false
        }

        this.handlejobCreateds = this.handlejobCreateds.bind(this);
    }

    handlejobCreateds() {
        this.setState({ showToast: !this.state.showToast});
    }

    render() {

        return (
            <div >
                <form onSubmit={this.handlesubmit}>
                    <input className="toast" type="submit" value="Job has been created successfully!" onClick={this.handlejobCreated} />                    
                    {this.state.show ? <span></span> : null}
                </form> 
            </div>
        );
    }
}

export default ToastContainer;