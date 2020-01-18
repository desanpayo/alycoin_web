import React from 'react';
import logo from '../../assets/img/img-logo-1.png';

const Footer = () => {
    return (
        <div className="l-footer margin-top">
            <footer className="container max-content footer">
                <div className="footer-content">
                    <ul className="footer-info">
                        <li className="footer-item"><a className="footer-link" href="/alywallet">Alywallet</a></li>
                        <li className="footer-item"><a className="footer-link" href="/alysocial">AlySocial</a></li>
                        <li className="footer-item"><a className="footer-link" href="/alyshopping">AlyShopping</a></li>
                        <li className="footer-item"><a className="footer-link" href="/alyskiper">AlySkiper</a></li>
                        <li className="footer-item"><a className="footer-link" href="/alypay">AlyPay</a></li>
                    </ul>
                    <ul className="footer-list">
                        <div className="footer-info">
                            <li className="footer-item"><a className="footer-link" href="/term">Terminos y condiciones</a></li>
                            <li className="footer-item"><a className="footer-link" href="/knowmore">Whitepaper</a></li>
                            <li className="footer-item"><a className="footer-link" href="/register">Registrate</a></li>
                            <li className="footer-item"><a className="footer-link" href="/login">Login</a></li>
                        </div>
                        <div className="footer-social">
                            <a className="footer-icon" href="https://www.facebook.com/Alycoin-Oficial-322743225246294/"><i className="fab fa-facebook-f"></i></a>
                            <a className="footer-icon" href="https://twitter.com/AlycoinC"><i className="fab fa-twitter"></i></a>
                            <a className="footer-icon" href="https://www.instagram.com/alycoin1/"><i className="fab fa-instagram"></i></a>
                            <a className="footer-icon" href="https://www.youtube.com/channel/UCZ-7lfbOQKeApcPMH4hMDqg"><i className="fab fa-youtube"></i></a>
                        </div>
                    </ul>
                </div>
                <div className="footer-logo"> 
                    <img src={logo} alt="Logo AlyCoin"/>
                </div>
                <div className="footer-copyright">
                    <p className="footer-foot">Derechos de <span>A</span>lySystem &copy;2018-2019 RUC: J0310000371555</p>
                    <p className="footer-foot">No trabajamos ni realizamos ningun servicio en los Estados Unidos de America, Brasil, Canada, España, Mexico o los Emiratos Arabes Unidos.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;