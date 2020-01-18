import React from 'react';
// import images
import icon_shopping from '../../assets/img/icon-alyshopping.png';
import icon_skiper from '../../assets/img/icon-alyskiper.png';
import icon_social from '../../assets/img/icon-alysocial.png';
import icon_wallet from '../../assets/img/icon-alywallet.png';
import icon_fundation from '../../assets/img/icon-alyfundation.png';
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
                    <Content img={icon_skiper} title="AlySkiper" description="Es la aplicacion de servicios de encomiendas express y taxi personalizado en la que podras utilizar tus criptomonedas AlyCoin, Dash, Ethereum, Litecoin y Bitcoin como forma de pago uniendo restaurantes, comercios y transporte en un solo click desde tu dispositivo movil." />
                    <Content img={icon_social} title="AlySocial" description="Es una red social descentralizada donde podras compartir tus contenidos originales y ganar por ellos, pretendemos ser la mas grande comunidad conectada del mundo." />
                    <Content img={icon_wallet} title="AlyWallet" description="Es una billetera virtual de alta seguridad donde podras guardar no solo tus monedas de Aly si no tambien las principales monedas del mercado que a su vez, te brinda la posibilidad de intercambiar entre ellas." />
                    <Content img={icon_fundation} title="AlyFundation" description="Es la fundacion de ayuda social, para la cual se destinara el 10% de las utilidades de la compañia, siendo utilizado dicho capital para proyectos de bien social y ayuda comunitaria a nivel internacional." />
                    <Content img={icon_cupon} title="CupON" description="Es la universidad en linea donde podras aprender de forma gratuita todo sobre el mundo del trading de criptomonedas y convertirte en un profesional en esta industria, tambien AlyCoin dara capital a las personas graduadasn para que se incorporen en el mercado de trading y puedan capitalizar ya que compartira 3% de las ganancias obtenidas por el trading." />
                </div>
            </section>
        )
    }
}

export default Services;