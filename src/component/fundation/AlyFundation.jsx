import React from 'react';
import Particle from '../particles/Particle';
import Form from './subcomponent/Form';
import Select from './subcomponent/Select';
import RequestApi from '../helpers/RequestApi';
import Form2 from './subcomponent/Form_2';
import Footer from '../footer/Footer';

class Alyfundation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            country: '',
        }
        this.Ajax = new RequestApi();
    }
    async componentDidMount() {
        const url = `https://alycoinappweb.appspot.com/countries/allcountries`;
        const response = await this.Ajax.requestApi(url, 'GET');
        this.setState({country: response.data});
    }

    render() {
        const { country } = this.state;
        return (
            <div className="l-alyfundation">
                <div className="parallax">
                    <div className="parallax-slide"></div>
                    <Particle />
                </div>
                <div className="alyfundation max-content container">
                    <h2 className="alypay-title">AlyFoundation</h2>
                    <p className="alyexecutive-paragraph">Es la fundación de ayuda social, para la cual se destinara el 10% de las utilidades de la compañia, siendo utilizado dicho capital para proyectos de bien social y ayuda comunitaria a nivel internacional.</p>
                    <div className="alyfundation-grid">
                        <div  className="alyfundation-item">
                            <p className="alyfundation-paragraph">¿Quieres ser parte de <span>AlyFundation</span> como voluntario?</p>
                            <Form country={ country } />
                        </div>
                        <div className="alyfundation-item">
                            <p className="alyfundation-paragraph">Si tienes un caso que necesita de nuestra ayuda, puedes describirlo aquí</p>
                            <Form2 />
                        </div>
                    </div>
                    <p className="alyfundation-paragraph alt">Si deseas hacer tu donación, lo puedes hacer aquí en la criptomoneda de tu preferencia.</p>
                    <Select />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Alyfundation;