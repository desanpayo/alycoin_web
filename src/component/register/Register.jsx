import React, { Component } from 'react';
import Form from './subcomponent/Form';
import RequestApi from '../helpers/RequestApi';
import Particle from '../particles/Particle';
import { Link } from 'react-router-dom';
import hashId from 'hashids';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            country: [],
            decrypt: '',
        }
        this.Ajax = new RequestApi();
        this.hash = new hashId();
    }

    async componentDidMount() {
        const url = `https://alycoinappweb.appspot.com/countries/allcountries`;
        const response = await this.Ajax.requestApi(url, 'GET');
        this.setState({country: response.data});

        if(this.props.match.params.id) {
            const decodeHash = this.hash.decodeHex(this.props.match.params.id);
            this.setState({ decrypt: decodeHash })
        }
    }
    render() {
        const { country } = this.state; 
        return (
            <div className="l-register">
                <div className="register-bg"><Particle /></div>
                <div className="register-overflow max-content">
                    <div className="register-header">
                        <div className="register-content">
                            <h2 className="register-alycoin">Aly<span>Coin</span></h2>
                            <h2 className="register-title">Crea tu cuenta.</h2>
                        </div>
                        <div className="register-icon">
                            <i className="fas fa-sign-in-alt"></i>
                        </div>
                    </div>
                    <Form country={ country } history={this.props.history} reffer={this.props.match.params.reffer} id={this.state.decrypt}/>
                    <div className={`register-circle`}>
                        <Link to="/" className="fas fa-arrow-circle-left"></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;