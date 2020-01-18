import React from 'react';
import logo from '../../assets/img/img-ecosystem.png';
import moneda from '../../assets/img/img-moneda-1.png';
import WOW from 'wowjs';

class Ecosystem extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <section className="l-ecosystem">
                <div className="container max-content ecosystem margin-top">
                    <div className="ecosystem-content">
                        <h2 className="ecosystem-title wow fadeInLeftBig">¿<span>Porqué</span> <span>AlyCoin</span>?</h2>
                        <p className="ecosystem-description wow fadeInLeftBig">Porqué gracias a su ecosistema de aplicaciones y sumando el crecimiento de la comunidad a nível mundial, lograremos posicionar como una moneda de gran usabilidad y demanda alcanzando altos valores sostenibles.</p>
                    </div>

                    <div className="ecosystem-logo">
                        <img className="ecosystem-moneda wow fadeInLeftBig" src={moneda} alt="Moneda AlyCoin" />
                        <img className="ecosystem-img wow fadeInLeftBig" src={logo} alt="Logo AlyCoin"/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Ecosystem;