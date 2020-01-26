import React from 'react';
import Modal from './modal/Modal';
import WOW from 'wowjs';
import playstore from '../../assets/img/icon-playstore.png';
import appstore from '../../assets/img/icon-appstore.png';

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
                        <h2 className="video-title wow rollIn"><div>Aly<span>Skiper</span></div> Cuenta conmigo</h2>
                        <div className="video-public">
                            <a className="video-content-img" target='_blank' rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.alyskiperuser&hl=es_NI" rel="opener"><img src={playstore} alt=""/></a>
                            <a className="video-content-img" href="#"><img src={appstore} alt=""/></a>
                        </div>
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