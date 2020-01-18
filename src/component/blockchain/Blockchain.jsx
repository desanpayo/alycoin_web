import React from 'react';
import { Link } from 'react-router-dom';

import moneda_1 from '../../assets/img/img-moneda-1.png';
import moneda_2 from '../../assets/img/img-moneda-2.png';
import moneda_3 from '../../assets/img/img-moneda-3.png';
import moneda_4 from '../../assets/img/img-moneda-4.png';
import moneda_5 from '../../assets/img/img-moneda-5.png';
import moneda_6 from '../../assets/img/img-moneda-6.png';
import moneda_7 from '../../assets/img/img-moneda-7.png';
import moneda_8 from '../../assets/img/img-moneda-8.png';
import moneda_9 from '../../assets/img/img-moneda-9.png';
import moneda_10 from '../../assets/img/img-moneda-10.png';
import moneda_11 from '../../assets/img/img-moneda-11.png';
import WOW from 'wowjs';

class Blockchain extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <section className="l-blockchain margin-top">
                <p className="blockchain-title wow fadeInRightBig"><span>Paquetes</span> <span>AlyCoin</span></p>
                <div className="blockchain max-content container">
                    <div className="blockchain-money wow fadeInRightBig">
                        <Link to="/backoffice/package"><img className="blockchain-img" src={moneda_1} alt="Moneda Alycoin"/></Link>
                        
                        <p className="blockchain-name">Vip</p>
                        <p className="blockchain-price">$100,000</p>
                    </div>
                    <div className="blockchain-money wow fadeInRightBig">
                        <Link className="blockchain-link" to="/backoffice/package">
                            <img className="blockchain-img" src={moneda_2} alt="Moneda Alycoin"/>
                            
                        </Link> 
                            <p className="blockchain-name">Diamond</p>
                            <p className="blockchain-price">$50,000</p>
                    </div>
                    <div className="blockchain-money wow fadeInRightBig">
                        <Link className="blockchain-link" to="/backoffice/package">
                            <img className="blockchain-img" src={moneda_3} alt="Moneda Alycoin"/>
                            
                        </Link>
                            <p className="blockchain-name">Platinum</p>
                            <p className="blockchain-price">$10,000</p>
                    </div>
                    <div className="blockchain-money wow fadeInRightBig">
                        <Link className="blockchain-link" to="/backoffice/package">
                            <img className="blockchain-img" src={moneda_4} alt="Moneda Alycoin"/>
                            
                        </Link>
                            <p className="blockchain-name">Golden</p>
                            <p className="blockchain-price">$5,000</p>
                    </div>
                    <div className="blockchain-money wow fadeInRightBig">
                        <Link className="blockchain-link" to="/backoffice/package">
                            <img className="blockchain-img" src={moneda_5} alt="Moneda Alycoin"/>
                            
                        </Link>
                            <p className="blockchain-name">Silver</p>
                            <p className="blockchain-price">$2,000</p>
                    </div>
                    <div className="blockchain-money wow fadeInRightBig">
                        <Link className="blockchain-link" to="/backoffice/package">
                            <img className="blockchain-img" src={moneda_6} alt="Moneda Alycoin"/>
                        </Link>
                            <p className="blockchain-name">Elite</p>
                            <p className="blockchain-price">$1,000</p>
                    </div>
                    <div className="blockchain-money wow fadeInRightBig">
                        <Link className="blockchain-link" to="/backoffice/package">
                            <img className="blockchain-img" src={moneda_7} alt="Moneda Alycoin"/>
                        </Link>
                            <p className="blockchain-name">Master</p>
                            <p className="blockchain-price">$500</p>
                    </div>
                    <div className="blockchain-money wow fadeInRightBig">
                        <Link className="blockchain-link" to="/backoffice/package">
                            <img className="blockchain-img" src={moneda_8} alt="Moneda Alycoin"/>
                        </Link>
                            <p className="blockchain-name">Premium</p>
                            <p className="blockchain-price">$250</p>
                    </div>
                    <div className="blockchain-money wow fadeInRightBig">
                        <Link className="blockchain-link" to="/backoffice/package">
                            <img className="blockchain-img" src={moneda_9} alt="Moneda Alycoin"/>
                        </Link>
                            <p className="blockchain-name">Basic</p>
                            <p className="blockchain-price">$100</p>
                    </div>
					<div className="blockchain-money wow fadeInRightBig">
                        <Link className="blockchain-link" to="/backoffice/package">
                            <img className="blockchain-img" src={moneda_10} alt="Moneda Alycoin"/>
                        </Link>
                            <p className="blockchain-name">Regular</p>
                            <p className="blockchain-price">$50</p>
                    </div>
					<div className="blockchain-money wow fadeInRightBig">
                        <Link className="blockchain-link" to="/backoffice/package">
                            <img className="blockchain-img" src={moneda_11} alt="Moneda Alycoin"/>
                        </Link>
                            <p className="blockchain-name">Minimum</p>
                            <p className="blockchain-price">$15</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Blockchain;