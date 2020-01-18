import React from 'react';
import Modal from './modal/Modal';
import WOW from 'wowjs';

class Video extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        }
    }
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }

    render() {
        return (
            <div className="l-video">
                <div className="video container max-content">
                    <div className="video-content">
                        <p className="video-subtitle wow rollIn">Haga click para ver.</p>
                        <h2 className="video-title wow rollIn"><div>Aly<span>Skiper</span></div> Cuenta con migo</h2>
                    </div>
                    <div className="video-modal">
                        <button onClick={(e) => this.setState({ isOpen: true})} className="video-open"><i className="fas fa-play"></i></button>
                    </div>
                </div>
                <Modal isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>
                    <iframe title="video alycoin" width="560" height="315" src="https://www.youtube.com/embed/MQmn4oEPgAw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Modal>
            </div>
        )
    }
}

export default Video;