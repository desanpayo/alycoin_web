import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import { Link } from 'react-router-dom';
import RequestApi from '../helpers/RequestApi';
import AuthMethod from '../helpers/Auth';
import swal from 'sweetalert';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {},
            isVerify: 'Iniciar sesion',
            recapcha: false,
            token: '',
        }

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        this.validateLogin = this.validateLogin.bind(this);
        this.Ajax = new RequestApi();
        this.Auth = new AuthMethod();
    }

    handleOnChange(e) {
        const fields = this.state.fields;
        fields[e.target.name] = e.target.value;

        this.setState({
            fields
        })
    }

    handleOnSubmit(e) {
        e.preventDefault();
        if(this.state.recapcha) {
            this.setState({ isVerify: 'Verificando...' });
            if(this.validateLogin()) {
                const url = `https://alycoinappweb.appspot.com/users/login`;
                this.Ajax.requestApi(url, 'POST', this.state.fields)
                    .then(response => {
                        if(response.status >= 200 && response.status < 300) {
                            if(response.data.Error) {
                                this.setState({ isVerify: "Iniciar sesion" });
                                return swal({
                                            title: "Error",
                                            text: "Por favor confirme su cuenta o verifique su correo y contraseña.",
                                            icon: "error"
                                        })
                            } 
                            if(response.data.success) {
                                this.Auth.setToken(response.data.token);
                                this.props.history.replace("/backoffice/package");
                            }
                        } else {
                            const error = new Error(response.statusText);
                            error.response = response;
                            throw error;
                        }
                    })
                  
            }else {
                this.setState({isVerify: 'Iniciar sesion'});
            }
        }else {
            swal({
                title: "Error",
                text: "Por favor verifica el captcha de seguridad.",
                icon: "error"
            })
        }
    }

    validateLogin() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if(!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Por favor ingrese el correo";
        }
        if(typeof fields["email"] !== "undefined") {
            const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if(!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "*Por favor ingrese un correo valido";
            }
        }

        if(!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Por favor ingrese su contraseña";
        }
        if(typeof fields["password"] !== "undefined") {
            if(fields["password"].length < 8 ) {
                formIsValid = false;
                errors["password"] = "*La contraseña debe contener mas de 8 digitos";
            }
        }
        this.setState({
            errors: errors,
            formIsValid: formIsValid
        })
        return formIsValid;
    }

    recaptchaLoaded() {
        this.setState({recapcha: false})
    }

    verifyCallback(response) {
        if(response) {
            this.setState({
                recapcha: true
            })
        } else {
            this.setState({
                recapcha: false
            })
        }
    }

    componentWillMount() {
        if(this.Auth.loggedIn()) {
            this.props.history.replace("/backoffice");
        }
    }
    componentDidMount() {
        if(this.props.match.params) {
            const urlVerify = `https://alycoinappweb.appspot.com/users/success/verify`;
            if(this.props.match.params.token) {
                const verifyAccount = {
                    token: this.props.match.params.token
                }
                this.Ajax.requestApi(urlVerify, 'POST', verifyAccount) 
                    .then(response => {
                        if(response.status >= 200 && response.status < 300) {
                            if(response.data.success === "Great! is all ready") {
                                swal({
                                    text: "Cuenta verificada correctamente",
                                    icon: "success"
                                })
                            }
                        }
                        if(response.data.error === "token is invalid or has expired") {
                            return swal({
                                title: "Error",
                                text: "El token de verificacion no es valido",
                                icon: "error"
                            })
                        }
                    })
            }
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
                            <h2 className="login-title">Inicia sesión en su cuenta.</h2>
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
                                
                                onChange={ this.handleOnChange }
                                />
                            <div className="login-error">{this.state.errors.email}</div>
                            <label className="login-label" htmlFor="username">Correo</label>
                        </div>
                        <div className={`login-group ${this.state.errors.password ? 'login-border' : ''}`}>
                            <input 
                                type="password" 
                                name="password"
                                className="login-input" 
                                id="pass"
                                
                                placeholder="Contraseña"
                                onChange={this.handleOnChange}/>
                            <div className="login-error">{this.state.errors.password}</div>
                            <label htmlFor="pass" className="login-label">Contraseña</label>
                        </div>

                        <div className="login-captcha">
                            <Recaptcha
                                sitekey="6LeVuZYUAAAAAL1YO5NBgZNSlsaFUbvgZl-uPyrn"
                                render="explicit"
                                onloadCallback={this.recaptchaLoaded}
                                verifyCallback={this.verifyCallback}
                            />
                        </div>

                        <div className="login-button">
                            <input 
                                type="submit" 
                                value={this.state.isVerify} 
                                className="login-submit"/>
                        </div>
                        
                        <div className="login-information">
                            <p className="login-term">¿Aun no tienes una cuenta? Haga click <Link to="/register" className="login-strong">aquí</Link> para registrarte.</p>
                            <p className="login-term">¿Olvidaste tu contraseña? Haga click <Link to="/reset" className="login-strong">aquí</Link> para recuperarla.</p>
                            <p className="login-term-des">No trabajamos ni realizamos ningún servicio en los Estados Unidos de América, Brasil, Canadá, México o los Emiratos Árabes Unidos.</p>
                        </div>
                    </form>
                    <div className={`login-circle`}>
                        <Link to="/" className="fas fa-arrow-circle-left"></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;