import React from 'react';
import Content from './subcomponent/Content';
import WOW from 'wowjs';
import Modal from './subcomponent/Modal';
import playstore from '../../assets/img/icon-playstore.png';
import appstore from '../../assets/img/icon-appstore.png';
import paso_1 from '../../assets/img/img-paso-1.jpeg';
import paso_2 from '../../assets/img/img-paso-2.jpeg';
import paso_3 from '../../assets/img/img-paso-3.jpeg';
import paso_4 from '../../assets/img/img-paso-4.jpeg';

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        }
    }

    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }

    render() {
        return (
            <section className="l-main max-content container margin-top">
                <h2 className="main-title wow fadeInRight">Aly<span>Coin</span></h2>
                <p onClick={(e) => this.setState({ isOpen: true})} className="main-button wow fadeInUpBig">Descargar wallet para <span>AlyCoin</span></p>
                <Content />
                <Modal isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>
                    <div className="container-main-overflow container">
                        <div className="main-content-dialog">
                            <p className="main-content-title">Descarga wallet para <span className="main-content-alt">Aly<span className="main-content-alt-2">Coin</span></span></p>
                            <p className="main-coinomi">Descargue coinomi</p>
                            <div>
                                <a className="main-content-img" href="https://play.google.com/store/apps/details?id=com.coinomi.wallet" rel="opener"><img src={playstore} alt=""/></a>
                                <a className="main-content-img" href="https://itunes.apple.com/us/app/coinomi-wallet/id1333588809" rel="opener"><img src={appstore} alt=""/></a>
                            </div>
                        </div>
                        <div className="main-content-grid">
                            <div className="main-content-item">
                                <h2 className="main-content-item-title">Paso 1:</h2>
                                <p className="main-content-item-description">Descargar wallet y registrarse, recuerda guardar tus 24 frases de recuperación en un sitio seguro.</p>
                                <img src={paso_1} alt=""/>
                            </div>
                            <div className="main-content-item">
                                <h2 className="main-content-item-title">Paso 2:</h2>
                                <p className="main-content-item-description">Desliza la pantalla y da click en "+ Tokens" en la parte inferior derecha de tu dispositivo.</p>
                                <img src={paso_2} alt=""/>
                            </div>
                            <div className="main-content-item">
                                <h2 className="main-content-item-title">Paso 3:</h2>
                                <p className="main-content-item-description">Da click en "Add Token Manauly" o "Agregar token manualmente" (Segun el idioma de tu dispositivo).</p>
                                <img src={paso_3} alt=""/>
                            </div>
                            <div className="main-content-item">
                                <h2 className="main-content-item-title">Paso 4:</h2>
                                <p className="main-content-item-description">Completa la información de token de Alycoin.</p>
                                <img src={paso_4} alt=""/>
                            </div>
                        </div>
                        <div className="main-content-para">
                            <p className="main-paragraph">Contrato: <span>0x6e72Ef58284AF3b858E73A17Fdb4564cbE13fc70 </span></p>
                            <p className="main-paragraph">Nombre de moneda: <span>Alycoin</span></p>
                            <p className="main-paragraph">Simbolo: <span>Aly</span></p>
                            <p className="main-paragraph">Decimales: <span>4</span></p>
                        </div> 
                    </div>
                </Modal>
            </section>
        )
    }
}

export default Main;