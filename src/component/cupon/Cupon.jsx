import React from 'react';
import cupon from '../../assets/img/img-app-1.jpeg';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

const Cupon = () => {
    return (
        <div className="l-application">
            <div className="application">
                <div className="application-app">
                    <div className="application-main">
                        <h2 className="application-subtitle">Aly<span>Coin</span></h2>
                        <p className="application-slogan">Una moneda para el mundo</p>
                        <div className="application-buttons">
                            <Link className="application-button" to="/register">Registrarte</Link>
                            <Link className="application-button" to="/knowmore">Saber mas.</Link>
                        </div>
                    </div>
                </div>
                
                <div className="application-img">
                    <img src={cupon} alt="CupON"/>
                </div>
            </div>

            <div className="application-content max-content container margin-top">
                <h2 className="application-title"><span>Próximamente</span> CupON</h2>
                <p className="application-description">Es la universidad en línea donde podrás aprender de forma gratuita todo sobre el mundo del trading de criptomonedas y convertirte en un profesional en esta industria, también dará capital a las personas graduadas para que se incorporen en el mercado de trading y puedan capitalizar ya que compartirá 3% de las ganancias obtenidas por el trading.</p>
            </div>
            <Footer /> 
        </div>
    )
}

export default Cupon;