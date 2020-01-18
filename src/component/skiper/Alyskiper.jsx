import React from 'react';
import skiper from '../../assets/img/img-app-3.jpeg';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

const Alyskiper = () => {
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
                    <img src={skiper} alt="AlySkiper"/>
                </div>
            </div>

            <div className="application-content max-content container margin-top">
                <h2 className="application-title"><span>Próximamente</span> AlySkiper</h2>
                <p className="application-description">Es la aplicación de servicios de encomiendas express y taxi personalizado en la que podrás utilizar tus criptomonedas, Dash, Ethereum, Litecoin, Bitcoin y Alycoin como forma de pago uniendo restaurantes, comercios y transporte en un solo click desde tu dispositivo movil. </p>
            </div>
            <Footer /> 
        </div>
    )
}

export default Alyskiper;