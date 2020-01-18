import React from 'react';
import { Link } from 'react-router-dom';
import RequestApi from '../helpers/RequestApi';
import AuthMethod from '../helpers/Auth';
import swal from 'sweetalert'

class Reset extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            errors: {},
            isVerify: 'Restablecer contraseña',
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.validateReset = this.validateReset.bind(this);
        this.Ajax = new RequestApi();
        this.Auth = new AuthMethod();
    }

    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleOnSubmit(e) {
        e.preventDefault();
        const url = `https://alycoinappweb.appspot.com/users/forgot`;
        if(this.validateReset()) {
            const userReset = {
                email: this.state.email
            }
            this.setState( {isVerify: 'Enviando...' });
            this.Ajax.requestApi(url,'POST', userReset)
                .then(response => {
                    if(response.status >= 200 && response.status < 300) {
                        if(response.data.Error === "User is not exist") {
                            this.setState( {isVerify: 'Restablecer contraseña' } );
                            return  swal({
                                        title: "Error",
                                        text: "El correo ingresado no existe.",
                                        icon: "error"
                                    })
                        }
                        if(response.data.success === "Great! is all ready") {
                            swal({
                                text: "Hemos enviado por correo el enlace para restablecer su contraseña.",
                                icon: "success",
                            });
                            this.setState( {isVerify: 'Restablecer contraseña' } );
                        }
                    } else {
                        const error = new Error(response.statusText);
                        error.response = response;
                        throw error;
                    }
                })
        } else {
            this.setState( {isVerify: 'Restablecer contraseña' });
        }
    }
 
    validateReset() {
        let email = this.state.email;
        let errors = {};
        let formIsValid = true;

        if(!email) {
            formIsValid = false;
            errors["email"] = "*Por favor ingrese el correo";
        }
        if(typeof email !== "undefined") {
            const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if(!pattern.test(email)) {
                formIsValid = false;
                errors["email"] = "*Por favor ingrese un correo valido";
            }
        }
        this.setState({
            errors: errors,
            formIsValid: formIsValid
        })
        return formIsValid;
    }

    componentWillMount() {
        if(this.Auth.loggedIn()) {
            this.props.history.replace("/backoffice");
        }
    }

    render() {
        return (
            <div className="l-login">
                <div className="login-bg"></div>
                <div className="login-overflow">
                    <div className="login-header">
                        <div className="login-content">
                            <h2 className="login-alycoin">Aly<span>Coin</span></h2>
                            <h2 className="login-title">Restablecer contraseña.</h2>
                        </div>
                        <div className="login-icon">
                            <i className="fas fa-sign-in-alt"></i>
                        </div>
                    </div>
                    <form onSubmit={ this.handleOnSubmit } className="login-form" autoComplete="off">
                        <div className={`login-group ${this.state.errors.email ? 'login-border' : ''}`}>
                            <input 
                                type="text"
                                placeholder="Por favor ingrese su correo" 
                                className="login-input"
                                name="email"
                                id="email"
                                required
                                onChange={ this.handleOnChange }
                                />
                            <div className="login-error">{this.state.errors.email}</div>
                            <label className="login-label" htmlFor="username">Correo</label>
                        </div>
                        <div className="login-button">
                            <input 
                                type="submit" 
                                value={this.state.isVerify} 
                                className="login-submit"/>
                        </div>
                        <div className="login-information">
                            <p className="login-term">¿Recordaste? Haga click <Link to="/login" className="login-strong">aquí</Link> para iniciar sesión.</p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Reset;