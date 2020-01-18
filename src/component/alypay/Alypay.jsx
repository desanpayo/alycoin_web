import React from 'react';
import card_1 from '../../assets/img/img-card-vip.png';
import card_2 from '../../assets/img/img-card-diamond.png';
import card_3 from '../../assets/img/img-card-golden.png';
import card_4 from '../../assets/img/img-card-platinum.png';
import card_5 from '../../assets/img/img-card-silver.png';
import card_6 from '../../assets/img/img-card-main.png';
import Footer from '../footer/Footer';
import Particle from '../particles/Particle';

const Alypay = () => {
    return (
        <div className="l-alypay">
            <div className="parallax">
                <div className="parallax-slide"></div>
                <Particle />
            </div>
            <div className="alypay max-content container">
                <h2 className="alypay-title">AlyPay</h2>

                <section className="alypay-grid">
                    <figure className="alypay-img">
                        <img src={card_1} alt="Card AlyCoin"/>
                    </figure>
                    <figure className="alypay-img">
                        <img src={card_2} alt="Card AlyCoin"/>
                    </figure>
                    <figure className="alypay-img">
                        <img src={card_3} alt="Card AlyCoin"/>
                    </figure>
                    <figure className="alypay-img">
                        <img src={card_4} alt="Card AlyCoin"/>
                    </figure>
                    <figure className="alypay-img">
                        <img src={card_5} alt="Card AlyCoin"/>
                    </figure>
                    <figure className="alypay-img">
                        <img src={card_6} alt="Card AlyCoin"/>
                    </figure>
                    <p className="alypay-subtitle">Próximamente</p>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Alypay;