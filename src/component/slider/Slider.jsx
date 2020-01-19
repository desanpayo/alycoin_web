import React from 'react';
import alycoin from '../../assets/img/img-logo-2.png';
import Fixedbar from '../fixebar/Fixebar'
import slide_video from '../../assets/video/slide-video.mp4'
import { Link } from 'react-router-dom'

class Slider extends React.Component {
    render() {
        return (
            <div className="l-slider">
                <video loop autoPlay src={slide_video} />
                <div className="slider-content">
                    <div className="slider-info">
                        <h2 className="slider-title">Bienvenidos</h2>
                        <div className="slider-buttons">
                            <Link className="slider-button" to="/login">Ingresar<i className="fas fa-arrow-right"></i></Link>
                            <Link className="slider-button" to="/register">Registrarse<i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="slider-img" itemScope itemType="http://schema.org/Organization">
                        <img itemProp="logo"className="slider-logo" src={alycoin} alt="Logo Alycoin"/>
                    </div>
                </div>
                <div className="slider-bg"></div>
                <div className="slider"></div>
                <Fixedbar />
            </div>
        ) 
    } 
} 
export default Slider;