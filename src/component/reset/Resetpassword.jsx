import React from 'react';
import { Link } from 'react-router-dom';
import RequestApi from '../helpers/RequestApi';
import AuthMethod from '../helpers/Auth';
import swal from 'sweetalert';

class Resetpassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {},
            isVerify: 'Guardar contraseña',
            token: '',
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.validateResetPassword = this.validateResetPassword.bind(this);
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
        if(this.validateResetPassword()) {
            this.setState({ isVerify : "Guardando..." });
            const url = `https://alycoinappweb.appspot.com/users/password/reset`;
            const userReset = {
                password: this.state.fields["password"],
                token: this.state.token
            }
            this.Ajax.requestApi(url,'POST', userReset)
                .then(response => {
                    console.log(response)
                    if(response.status >= 200 && response.status < 300) {
                        if(response.data.error === "Password reset is invalid or has expired") {
                            this.setState( {isVerify: 'Restablecer contraseña' } );
                            return  swal({
                                        title: "Error",
                                        text: "El cambio de contraseña es invalido.",
                                        icon: "error"
                                    })
                        }
                        if(response.data.success === "Great! is all ready") {
                            swal({
                                text: "Contraseña guardada correctamente.",
                                icon: "success",
                            });
                            this.props.history.replace("/login");
                        }
                    } else {
                        const error = new Error(response.statusText);
                        error.response = response;
                        throw error;
                    }
                })
        }else {
            this.setState({ isVerify : "Guardar contraseña" })
        }
    }

    validateResetPassword() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

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
    // -----------------------------------------------------------------------------------

        if(!fields["password_confirm"]) {
            formIsValid = false;
            errors["password_confirm"] = "*Por favor ingrese su contraseña";
        }
        if(typeof fields["password_confirm"] !== "undefined") {
            if(fields["password_confirm"].length < 8 ) {
                formIsValid = false;
                errors["password_confirm"] = "*La contraseña debe contener mas de 8 digitos";
            }
        }
        // -----------------------------------------------------------------------------------
        if(!(fields["password"] === fields["password_confirm"])) {
            formIsValid =  false;
            swal({
                title: "Error",
                text: "Las contraseñas no coinciden.",
                icon: "error",
                className: "alert-error"
            })
        }

        this.setState({
            errors: errors,
            formIsValid: formIsValid
        })
        return formIsValid;
    }

    componentDidMount() {
        if(!this.props.match.params) {
            this.props.history.replace("/login");
        }else {
            this.setState({ token: this.props.match.params.token })
        }
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
                            <h2 className="login-title">Recuperar la contraseña.</h2>
                        </div>
                        <div className="login-icon">
                            <i className="fas fa-sign-in-alt"></i>
                        </div>
                    </div>
                    <form onSubmit={ this.handleOnSubmit } className="login-form" autoComplete="off">
                        <div className={`register-group ${this.state.errors.password ? 'login-border' : ''}`}>
                            <input 
                                type="password" 
                                name="password"
                                className="register-input" 
                                id="pass"
                                required
                                placeholder="Contraseña"
                                onChange={this.handleOnChange}/>
                                <div className="register-error">{this.state.errors.password}</div>
                            <label htmlFor="pass" className="register-label">Contraseña</label>
                        </div>
                        <div className={`register-group ${this.state.errors.password_confirm ? 'login-border' : ''}`}>
                            <input 
                                type="password" 
                                name="password_confirm"
                                className="register-input" 
                                id="password_confirm"
                                required
                                placeholder="Confirme la contraseña"
                                onChange={this.handleOnChange}/>
                                <div className="register-error">{this.state.errors.password_confirm}</div>
                            <label htmlFor="password_confirm" className="register-label">Confirme la Contraseña</label>
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

export default Resetpassword;