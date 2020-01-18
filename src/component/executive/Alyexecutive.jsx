import React from 'react';
import Particle from '../particles/Particle';
import icon from '../../assets/img/icon-alyexecutive.png';
const Alyexecutive = () => {
    return (
        <div className="l-alyexecutive">
            <div className="parallax">
                <div className="parallax-slide"></div>
                <Particle />
            </div>
            <div className="alyexecutive max-content container">
                <img src={icon} alt="Icon Alyexecutive"/>
                <h2 className="alypay-title">AlyExecutive</h2>
                <p className="alyexecutive-paragraph">Es el equipo de ejecutivo encargados de promover el uso de las aplicaciones de <span>AlySystem</span> junto a su criptomoneda <span>AlyCoin</span> para formar la comunidad internacional que le dara valor a la misma.</p>
                <div className="alyexecutive-download">
<a href="https://alycoinappweb.appspot.com/descargar/AlySystem.pdf" className="whitepaper-download wow fadeInLeftBig alyexecutive-text">Descargar PDF</a><br/>
                    <a href="https://www.youtube.com/watch?v=4itrc1AOP1g" className="whitepaper-download wow fadeInLeftBig alyexecutive-text">Ver video de alytravel</a>
                </div>
            </div>
        </div>
    )
}
export default Alyexecutive;