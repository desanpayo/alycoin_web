import React from 'react';
import social from '../../assets/img/img-app-4.jpeg';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

const Alysocial = () => {
    return(
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
                    <img src={social} alt="AlySocial"/>
                </div>
            </div>

            <div className="application-content max-content container margin-top">
                <h2 className="application-title"><span>Próximamente</span> AlySocial</h2>
                <p className="application-description">Es una red social descentralizada donde podrás compartir tus contenidos originales y ganar por ellos, pretendemos ser la más grande comunidad conectada del mundo.</p>
            </div>
            <Footer /> 
        </div>
    )
}

export default Alysocial;