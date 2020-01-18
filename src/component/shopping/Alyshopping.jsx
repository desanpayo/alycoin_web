import React from 'react';
import shopping from '../../assets/img/img-app-2.jpeg';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

const Alyshopping = () => {
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
                    <img src={shopping} alt="AlyShopping"/>
                </div>
            </div>

            <div className="application-content max-content container margin-top">
                <h2 className="application-title"><span>Próximamente</span> AlyShopping</h2>
                <p className="application-description">Es la aplicacion que te abrira el mundo de las compras, ubicandote los comercios mas cercanos donde puedes pagar con AlyCoin y las principales criptomonedas del mercado a nivel mundial y ganar puntos promocionales que podras utilizar en la red de comercios afiliados.</p>
            </div>
            <Footer /> 
        </div>
    )
}

export default Alyshopping;