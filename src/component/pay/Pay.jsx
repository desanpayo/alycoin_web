import React from 'react';
import {Link}from 'react-router-dom';

import img_1 from '../../assets/img/img-card-diamond.png';
import img_2 from '../../assets/img/img-card-golden.png';
import img_3 from '../../assets/img/img-card-main.png';
import img_4 from '../../assets/img/img-card-platinum.png';
import img_5 from '../../assets/img/img-card-silver.png';
import img_6 from '../../assets/img/img-card-vip.png';
import WOW from 'wowjs';
import alypay from '../../assets/img/icon-alypay.png';

class Pay extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <div className="l-pay margin-top">
                <div className="container max-content pay">
                    <div className="pay-wrap wow bounceInUp">
                        <div className="pay-card">
                            <img src={img_2} alt="Card-AlyCoin"/>
                        </div>
                        <div className="pay-card">
                            <img src={img_3} alt="Card-AlyCoin"/>
                        </div>
                        <div className="pay-card">
                            <img src={img_4} alt="Card-AlyCoin"/>
                        </div>
                        <div className="pay-card">
                            <img src={img_5} alt="Card-AlyCoin"/>
                        </div>
                        <div className="pay-card">
                            <img src={img_1} alt="Card-AlyCoin"/>
                        </div>
                        <div className="pay-card">
                            <img src={img_6} alt="Card-AlyCoin"/>
                        </div>
                    </div>
                    <div className="pay-content wow bounceInUp">
                        <div className="pay-header">
                            <img className="pay-logo" src={alypay} alt="Logo AlyPay"/>
                            <p className="pay-title-content"><span>A</span>lyPay</p>
                        </div>
                        <div><p className="pay-description">La pasarela donde los usuarios podrán hacer transferencias y pagos 100% con criptomonedas a través de las aplicaciones de AlySystem.</p></div>
                        <div className="pay-align"><Link to="/alypay" className="pay-alypay">Ir a AlyPay</Link></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Pay;