import React from 'react';
import WOW from 'wowjs';
import vision from '../../../assets/img/icon-vision.svg';
import mision from '../../../assets/img/icon-mision.svg';

class Content extends React.Component {

    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }

    render() {
        return (
            <div>
                <div className="main-grid">
                    <div className="main-card">
                        <img className="main-icon wow zoomIn" src={mision} alt="icon-mision"/>
                        <h2 className="main-grid-title wow zoomIn">Misión</h2>
                        <p className="main-description wow zoomIn">Crear herramientas de usabilidad para criptomonedas a nivél mundial.</p>
                    </div>
                    <div className="main-card">
                        <img className="main-icon wow zoomIn" src={vision} alt="icon-vision"/>
                        <h2 className="main-grid-title wow zoomIn">Visión</h2>
                        <p className="main-description wow zoomIn">Unir a usuarios, comercios y transportes a nivél mundial en la nueva era de pagos digitales a través de criptomonedas.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;