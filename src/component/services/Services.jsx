import React from 'react';
// import images
import icon_shopping from '../../assets/img/icon-alyshopping.png';
import icon_skiper from '../../assets/img/icon-alyskiper.png';
import icon_social from '../../assets/img/icon-alysocial.png';
import icon_exchange from '../../assets/img/icon-exchange.png';
import icon_conection from '../../assets/img/icon-conection.png';
import icon_cupon from '../../assets/img/icon-alycupon.png';
import WOW from 'wowjs';
import Content from './subcomponent/Content';

class Services extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <section className="l-services margin-top">
                <h2 className="services-main wow fadeInLeftBig">Aplicaciones</h2>
                <div className="container max-content services">
                    <Content img={icon_shopping} title="AlyShopping" description="Es la aplicacion que te abrira el mundo de las compras, ubicandote los comercios mas cercanos donde puedes pagar con AlyCoin y las principales criptomonedas del mercado a nivel mundial y ganar puntos promocionales que podras utilizar en la red de comercios afiliados." />
                    <Content img={icon_skiper} title="AlySkiper" description="La aplicación vanguardia de AlySystem, el marketplace que integra a la oferta y la demanda de la cotidianidad en un solo toque de cualquier dispositivo móvil. Podrá usar Alycoin las principales criptomonedas de del mercado a través de esta app." />
                    <Content img={icon_social} title="AlySocial" description="Es una red social descentralizada donde podras compartir tus contenidos originales y ganar por ellos, pretendemos ser la mas grande comunidad conectada del mundo." />
                    <Content img={icon_exchange} title="AlyExchange" description="AlyExchange constituye una plataforma de intercambio de divisas a través de criptomonedas. Nuestro software permitirá a los inversores realizar operaciones justas y ordenadas, monitorear cuentas de criptoactivos y difundir eficientemente la información de precios para cualquier negociación de valores a través de intermediarios financieros. Esta aplicación contará con las más recientes tecnologías de desarrollo de inteligencia artificial y blockchain, Aly; de la empresa AlySystem." />
                    <Content img={icon_conection} title="AlyConection" description="Se trata de unificar a todos los servicios de recargas móviles en una sola plataforma, donde las criptomonedas serán aceptadas como una de las formas de pago." />
                    <Content img={icon_cupon} title="CupON" description="La universidad de criptomonedas que pretende extender a las masas la cultura de esta nueva forma de pago, asi como sus posibles aplicaciones, ya sea en mercados de trading o en la vida diaria." />
                </div>
            </section>
        )
    }
}

export default Services;