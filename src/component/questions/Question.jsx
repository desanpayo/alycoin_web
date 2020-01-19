import React from 'react';
import Logo from '../svg/Logo';
import WOW from 'wowjs';

class Question extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <section className="l-question margin-top">
                <div className="container max-content question">
                    <div className="question-content">
                    <h2 className="question-title wow fadeInUp">¿<span>Qué es <span>AlyCoin</span></span>?</h2>
                        <p className="question-description wow fadeInRightBig">AlyCoin es la moneda de AlySystem. Creada como un token ERC20 de Ethereum, usa un sistema de garantía de contratos inteligentes.</p>
                        <p className="question-description wow fadeInRightBig">Hay una cantidad de 82,354,000 tokens listos para salir al mercado, junto con un ecosistema de aplicaciones que le darán usabilidad y valor a la moneda.</p>
                    </div>

                    <div className="question-logo wow fadeInRightBig">
                        <Logo />
                    </div>
                </div>
            </section>
        )
    }
}


export default Question;