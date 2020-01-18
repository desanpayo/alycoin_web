import React from 'react';
import WOW from 'wowjs';

class Whitepaper extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <section className="l-whitepaper">
                <div className="whitepaper max-content container">
                    <div className="whitepaper-content">
                        <h2 className="whitepaper-title wow fadeInLeftBig"><span>Descarga</span> <span>Whitepaper</span></h2>
                        <div>
                            <p className="whitepaper-description wow fadeInLeftBig">Un libro blanco es un informe o guía autorizada que informa a los lectores de manera concisa sobre un tema complejo y presenta la filosofía del organismo emisor sobre el tema. Está destinado a ayudar a los lectores a entender un problema, resolver un problema o tomar una decisión.</p>
                            <p className="whitepaper-description wow fadeInLeftBig">Los profesionales de marketing crean informes técnicos para educar a su audiencia sobre un tema en particular, o para explicar y promover una metodología en particular.</p>
                        </div>
                        <a className="whitepaper-download wow fadeInLeftBig" href="https://alycoinappweb.appspot.com/descargar/whitepaperalycoin.pdf">Descargar<i className="fas fa-arrow-right"></i></a>
                    </div>
                    <div className="whitepaper-image wow fadeInLeftBig">
                        <div className="whitepaper-img">
                            <div className="whitepaper-cover">
                                <figure className="whitepaper-front"></figure>
                                <figure className="whitepaper-back"></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        )
    }
}

export default Whitepaper;