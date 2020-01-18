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
                        <p className="question-description wow fadeInRightBig">Es un Token independiente basado en Ethereum y que usa un sistema de garantía de contratos inteligentes.</p>
                        <p className="question-description wow fadeInRightBig">Hay una cantidad de 82,354,000 tokens listos para salir al mercado, junto con un solido ecosistem de aplicaciones que le dara usabilidad y valor a la moneda.</p>
                        <p className="question-description wow fadeInRightBig">Y tu tienes la posibilidad de maximizar tus ganancias al adquirirla en la etapa del ICO.</p>
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