import React from 'react';

class Modal extends React.Component {
    render() {
        let modal = (
            <div className="modal-content">
                { this.props.children }
            </div>
        )
    
        if(!this.props.isOpen) {
            modal = null;
        }
        return (
            <div className={`modal-alt ${this.props.isOpen ? 'scale' : ''}`}>
                <button className="modal-close" onClick={this.props.onClose}>x</button>
                { modal }
            </div>
        )
    }
}

export default Modal;