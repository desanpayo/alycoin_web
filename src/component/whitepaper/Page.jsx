import React from 'react';
import background from '../../assets/img/img-page.jpg';
import Particle from '../particles/Particle';
import Content from '../main/subcomponent/Content';
import WOW from 'wowjs';
import Team from './subcomponent/Team';
import Card from './subcomponent/Card';
import Footer from '../footer/Footer';

class Page extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <div className="l-page">
                <div className="parallax">
                    <div className="parallax-slide"></div>
                    <Particle />
                </div>
                <div className="page max-content container">
                    <div className="page-banner">
                        <img className="page-img" src={background} alt="Background Whitepaper"/>
                        <h2 className="page-title-main">Whitepaper <div className="page-subtitle">Aly<span>Coin</span></div></h2>
                    </div>
                    <div className="page-resumen">
                        <h2 className="page-title">Resumen</h2>
                        <p className="page-paragraph">AlyCoin es la moneda de la AlySystem. Basado en Ethereum, usa un sistema de garantía de contratos inteligentes. Hay una cantidad de 82,354,000 tokens listos para salir al mercado, junto con un ecosistema de aplicaciones que le darán usabilidad y valor a la moneda.</p>
                        <Content />
                        <h2 className="page-title">Aclaraciones</h2>
                        <p className="page-paragraph">Este documento es sólo para fines informativos y no constituye ningún derecho legal entre usted y <span>Alycoin (ALY)</span>. Este documento técnico es un trabajo que está sujeto a revisión y modificaciones.</p>
                        <p className="page-paragraph">La Compañía tiene la intención de operar en pleno cumplimiento con las leyes y regulaciones aplicables, obtener las licencias y aprobaciones necesarias. No es posible garantizar que cualquiera de tales licencias o aprobaciones se obtendrán dentro de un período de tiempo particular o en todos. Esto significa que las iniciativas descritas en este documento no pueden estar disponible en ciertos mercados, o en todos. Durante ciertas etapas de desarrollo, el proyecto puede depender de relaciones con ciertas entidades de terceros con licencia. Si estas entidades no tienen la licencia adecuada en la jurisdicción relevante, esto afectará la capacidad de la Compañía para confiar en los servicios de esa parte.</p>
                        <p className="page-paragraph">Las referencias en este documento técnico a empresas, redes y / o los posibles casos de uso son solo para fines ilustrativos. El uso de cualquier empresa y / o nombres de aplicaciones y las marcas registradas no implican ninguna afiliación o respaldo de cualquiera de esas partes. Todas las referencias a "dólares", USD o "$" son referencias a dólares de los Estados Unidos a menos que se indique lo contrario.</p>
                        <p className="page-paragraph">Todos los gráficos incluidos en este documento técnico son solo para fines ilustrativos. En particular, los gráficos con referencia de precios no se traducen en información de precios reales.</p>
                        <p className="page-paragraph">Los tokens criptográficos pueden estar sujetos a expropiación y / o robo; hackers u otros grupos u organizaciones maliciosos pueden intentar interferir con nuestro sistema / red de varias maneras, incluyendo ataques de malware, negación de ataques de servicio, ataques basados en el consenso, ataques de Sybil, pituflaje y suplantación de identidad que puede resultar en la pérdida de sus fichas criptográficas, pérdida de su capacidad para acceder o controlar sus fichas criptográficas. De tal evento, puede que no haya remedio, y los titulares de tokens criptográficos no garantiza ningún remedio, reembolso, o compensación.</p>
                        <p className="page-paragraph">El estado reglamentario de los tokens criptográficos y los activos digitales se encuentra actualmente sin resolver, varía entre las jurisdicciones y sujeto a incertidumbre significativa. Es posible que en el futuro, ciertas leyes, regulaciones, políticas o reglas relacionados con tokens criptográficos, activos digitales, tecnología blockchain, o aplicaciones blockchain pueden ser implementado que directa o indirectamente afecta o restringe el derecho de los titulares de tokens criptográficos a adquirir, poseer, mantener, vender, convertir, comercializar o usar fichas criptográficas.</p>
                        <p className="page-paragraph">La incertidumbre en la legislación fiscal relativa a las fichas criptográficas y los activos digitales pueden exponer a los titulares de fichas criptográficas a las consecuencias fiscales asociadas al uso o comercialización de token criptográfico.</p>
                        <p className="page-paragraph">Los activos digitales y los productos y servicios financieros conllevan riesgos significativos. Los compradores potenciales deben evaluar la naturaleza y riesgos relevantes, para que antes de tomar cualquier decisión consulten a sus asesores.</p>
                        <p className="page-paragraph">Este documento técnico contiene ciertas declaraciones que son prospectivas, por su naturaleza, sujeta a importantes riesgos e incertidumbres. Nuestras declaraciones prospectivas se basan en la información actualmente disponible para nosotros sobre el negocio que operamos.</p>
                        <p className="page-paragraph">Las declaraciones a futuro pueden incluir estimaciones y suposiciones y están sujetos a riesgos, incertidumbres y otros factores que están fuera de nuestro control y la predicción. En consecuencia, estos factores podrían causar resultados reales o resultados que difieren materialmente de los expresados en la visión de declaraciones a futuro.</p>
                        <h3 className="page-title">Estrategia</h3>
                        <p className="page-paragraph">Alycoin realizará su fase ICO que comprenderá en un período de un año iniciando el día 24 de Diciembre 2018 y concluirá el día 24 de Diciembre 2019, en el cuál se distribuirán 35 millones de tokens de alycoin en lotes de 5 millones cada lote iniciando un precio de $ 0.10 (Diez centavos de dólares americanos) con el primer lote, el precio irá incrementando por cada lote.</p>
                        <p className="page-paragraph">Se desarrollará un Ecosistema que consiste en productos o contenidos digitales que harán que la criptomoneda Alycoin tenga usabilidad para que impulse el precio de la criptomoneda, dependiendo de la oferta y la demanda de la misma, el cual irá saliendo paulatinamente en el transcurso de la fase ICO.</p>
                        <p className="page-paragraph">Como parte del Ecosistema tendremos Ejecutivos que son los principales en la distribución de Alycoin en la fase ICO. Este y todos los productos de nuestro Ecosistema es parte de nuestra Estrategia.</p>
                        <p className="page-paragraph">Al finalizar la fase ICO se pretende que Alycoin se encuentre en varios Exchanges tales como: Binance, Bittrex, Bithumb, Huobi, OKex, Upbit, HitBTC, Bit-Z, EXX, Gate.io, BigONE, Livecoin, Yobit y Cobinhood.</p>
                        <h4 className="page-subtitle-description">Productos del ecosistema de <span>AlyCoin</span></h4>
                        <h5 className="page-title--ben">AlyCoin</h5>
                        <p className="page-paragraph">Es la moneda de AlySystem, actualmente basada en un token ERC20 de Ethereum, con el desarrollo del blockchain propio de la compañía, Aly se pretende migrar la misma a este comenzando una nueva fase en su desarrollo.</p>
                        <h6 className="page-title--ben">AlyConnection</h6>
                        <p className="page-paragraph">Se trata de unificar a todos los servicios de recargas móviles en una sola plataforma, donde las criptomonedas serán aceptadas como una de las formas de pago.</p>
                        <h6 className="page-title--ben">AlyPay</h6>
                        <p className="page-paragraph">La pasarela donde los usuarios podrán hacer transferencias y pagos 100% con criptomonedas a través de las aplicaciones de AlySystem.</p>
                        <h6 className="page-title--ben">AlyExchange</h6>
                        <p className="page-paragraph">AlyExchange constituye una plataforma de intercambio de divisas a través de criptomonedas. Nuestro software permitirá a los inversores realizar operaciones justas y ordenadas, monitorear cuentas de criptoactivos y difundir eficientemente la información de precios para cualquier negociación de valores a través de intermediarios financieros. Esta aplicación contará con las más recientes tecnologías de desarrollo de inteligencia artificial y blockchain, Aly; de la empresa AlySystem.</p>
                        <h6 className="page-title--ben">AlySkiper</h6>
                        <p className="page-paragraph">La aplicación vanguardia de AlySystem, el marketplace que integra a la oferta y la demanda de la cotidianidad en un solo toque de cualquier dispositivo móvil. Podrá usar Alycoin las principales criptomonedas de del mercado a través de esta app.</p>
                        <h6 className="page-title--ben">CupON</h6>
                        <p className="page-paragraph">La universidad de criptomonedas que pretende extender a las masas la cultura de esta nueva forma de pago, asi como sus posibles aplicaciones, ya sea en mercados de trading o en la vida diaria.</p>
                        <h6 className="page-title--ben">AlyPay</h6>
                        <p className="page-paragraph">Es la tarjeta de débito de alycoin con la que podrás gastar tus criptomonedas en los comercios y cajeros de la red de mastercard.</p>
                        <h6 className="page-title--ben">Aly</h6>
                        <p className="page-paragraph">Aly es la inteligencia artificial de AlySystem, creada como un blockchain; con la capacidad de desarrollar contratos inteligentes. A través de la expansión de la cadena de bloques Aly tiene la capacidad de convertir sus contratos inteligentes en una nueva inteligencia artificial.</p>
                        <h6 className="page-title--ben">AlyFundation</h6>
                        <p className="page-paragraph">La fundación de ayuda social con la que se pretende financiar emprendimientos comunitarios y de bien social a nivel internacional.</p>
                        <h6 className="page-title--ben">AlyTravel</h6>
                        <p className="page-paragraph">Un marketplace que permitirá a los usuarios realizar reservaciones en hospedajes, hoteles y vuelos.</p>

                        <h6 className="page-team-title margin-top">Equipo <div>Aly<span>Coin</span></div></h6>
                        <div className="page-team-main margin-top">
                            {
                                Team.map(card => {
                                    return (
                                        <Card key={card.id} img={card.img} cargo={card.cargo} name={card.name} face={card.face} twitter={card.twitter} insta={card.insta}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Page;