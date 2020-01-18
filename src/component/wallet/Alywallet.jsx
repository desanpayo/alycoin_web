import React from 'react';
import wallet from '../../assets/img/img-app-5.jpeg';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

const Alywallet = () => {
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
                    <img src={wallet} alt="AlyWallet"/>
                </div>
            </div>

            <div className="application-content max-content container margin-top">
                <h2 className="application-title"><span>Próximamente</span> AlyWallet</h2>
                <p className="application-description">Es una billetera virtual de alta seguridad donde podrás guardar no solo tus monedas de si no también las principales monedas del mercado que a su vez ,te brinda la posibilidad de intercambiar entre ellas.</p>
            </div>
            <Footer /> 
        </div>
    )
}

export default Alywallet;