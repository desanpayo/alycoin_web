import React, { Component } from 'react';
import Country from './Country';
import Recaptcha from 'react-recaptcha';
import RequestApi from '../../helpers/RequestApi';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {},
            check: '',
            sponsor: '1',
            namesponsor: 'xxx',
            recapcha: false,
            isVerify: 'Crear cuenta',
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);

        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        this.Ajax = new RequestApi();
    }

    handleOnChange(e) { 
        if(e.target.name === 'check') {
            this.setState({
                [e.target.name]: e.target.checked
            })    
        } else {
            const fields = this.state.fields;
            fields[e.target.name] = e.target.value;

            this.setState({
                fields
            })
        }
    }

    handleOnSubmit(e) {
        const url = `https://alycoinappweb.appspot.com/users/register`;
        e.preventDefault();
        if(this.validateRegister()) {
            const userRegister = {
                first_name: this.state.fields["name"],
                last_name: this.state.fields["lastname"],
                email: this.state.fields["email"],
                user: this.state.fields["username"],
                password: this.state.fields["password"],
                sponsor:  this.props.id ? this.props.id : this.state.sponsor,
                namesponsor: this.props.reffer ? this.props.reffer : this.state.namesponsor,
                country: this.state.fields["country"],
                phone: this.state.fields["cellphone"]
            }
            this.setState({ isVerify: 'Creando cuenta...' })
            this.Ajax.requestApi(url, 'POST', userRegister)
                .then(response => {
                    if(response.status >= 200 && response.status < 300) {
                        if(response.data.error === "User already exists") {
                            this.setState({ isVerify: 'Crear cuenta' })
                            return swal({
                                        title: "Error",
                                        text: "El correo ya esta registrado.",
                                        icon: "error",
                                        className: "alert-error"
                                    })
                        } 
                        if(response.data.error === "Sponsor is not exist") {
                            this.setState({ isVerify: 'Crear cuenta' })
                            return swal({
                                        title: "Error",
                                        text: "El patrocinador no existe, por favor verifique su link.",
                                        icon: "error",
                                        className: "alert-error"
                                    })
                        }
                        if(response.data.status) {
                            swal({
                                text: "Usuario registrado correctamente, hemos enviado un correo de verificacion para poder activar su cuenta.",
                                icon: "success"
                            })
                            this.props.history.replace("/login");
                        }
                    } else {
                        const error = new Error(response.statusText);
                        error.response = response;
                        throw error;
                    }
                })
        }else {
            this.setState({ isVerify: 'Crear cuenta' })
        }
    }

    validateRegister() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if(!fields["name"]) {
            formIsValid = false;
            errors["name"] = "*Por favor ingrese su nombre";
        }

        if(typeof fields["name"] !== "undefined") {
            if(!fields["name"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["name"] = "*Por favor ingrese digitos validos.";
            }
        }

        if(!fields["lastname"]) {
            formIsValid = false;
            errors["lastname"] = "*Por favor ingrese su apellido";
        }

        if(typeof fields["lastname"] !== "undefined") {
            if(!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["lastname"] = "*Por favor ingrese digitos validos.";
            }
        }
   // -----------------------------------------------------------------------------------
        if(!fields["username"]) {
            formIsValid = false;
            errors["username"] = "*Por favor ingrese su nombre de usuario";
        }
        if(typeof fields["username"] !== "undefined") {
            if(!fields["username"].match(/[a-zA-Z0-9]{3,}/)) {
                formIsValid = false;
                errors["username"] = "*El nombre de usuario debe tener solo letras, numeros y debe ser mayor a 3 caracteres";
            }
        }
   // -----------------------------------------------------------------------------------     
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
    // -----------------------------------------------------------------------------------

        if(!fields["cellphone"]) {
            formIsValid =  false;
            errors["cellphone"] = "*Por favor ingrese el telefono";
        }

    // -----------------------------------------------------------------------------------

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

        // -----------------------------------------------------------------------------------
        if(this.state.check !== true) {
             errors["check"] = "*Acepte los terminos y condiciones.";
        }

        if(!this.state.recapcha) {
            swal({
                title: "Error",
                text: "Por favor verificar el captcha de seguridad",
                icon: "error",
                className: "alert-error"
            })
        }
        this.setState({
            errors: errors
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
    render() {
        return (
            <form className="register-form" onSubmit={this.handleOnSubmit} autoComplete="off">
                <div className="register-group">
                    <input 
                        type="text"
                        placeholder="Nombre del patrocinador" 
                        className="register-input"
                        name="sponsor"
                        id="sponsor"
                        value={ this.props.reffer }
                        disabled
                        />
                    <label className="register-label" htmlFor="sponsor">Patrocinador</label>
                </div>
                <div className="register-main">
                    <div className={`register-group ${this.state.errors.name ? 'login-border' : ''}`}>
                        <input 
                            type="text"
                            placeholder="Por favor ingrese su nombre" 
                            className="register-input"
                            name="name"
                            id="name"
                            required
                            onChange={ this.handleOnChange }
                            />
                        <div className="register-error">{this.state.errors.name}</div>
                        <label className="register-label" htmlFor="name">Nombre</label>
                    </div>
                    <div className={`register-group ${this.state.errors.lastname ? 'login-border' : ''}`}>
                        <input 
                            type="text"
                            placeholder="Por favor ingrese su apellido" 
                            className="register-input"
                            name="lastname"
                            id="lastname"
                            required
                            onChange={ this.handleOnChange }
                            />
                        <div className="register-error">{this.state.errors.lastname}</div>
                        <label className="register-label" htmlFor="lastname">Apellido</label>
                    </div>
                </div>
                <div className={`register-group ${this.state.errors.username ? 'login-border' : ''}`}>
                    <input 
                        type="text"
                        placeholder="Por favor ingrese el nombre de usuario" 
                        className="register-input"
                        name="username"
                        id="username"
                        required
                        onChange={ this.handleOnChange }
                        />
                        <div className="register-error">{this.state.errors.username}</div>
                    <label className="register-label" htmlFor="username">Nombre de usuario</label>
                </div>
                <div className={`register-group ${this.state.errors.email ? 'login-border' : ''}`}>
                    <input 
                        type="email"
                        placeholder="Por favor ingrese su correo" 
                        className="register-input"
                        name="email"
                        id="email"
                        required
                        onChange={ this.handleOnChange }
                        />
                        <div className="register-error">{this.state.errors.email}</div>
                    <label className="register-label" htmlFor="email">Correo</label>
                </div>

                <div className="register-grid">
                    <div className="register-select-content">
                        <select className="register-select" name="country" id="country" onChange={ this.handleOnChange }>
                            <option value="" disabled defaultValue>Selecciona tu país</option>
                            { Object.keys(this.props.country).map(key => (
                                <Country country={this.props.country[key]} key={key} />
                            ))}
                        </select>
                        <label htmlFor="country" className="register-label">País</label>
                    </div>
                    <div className={`register-group ${this.state.errors.cellphone ? 'login-border' : ''}`}>
                        <input 
                            type="text"
                            placeholder="Telefono"
                            name="cellphone"
                            id="tel"
                            required
                            className="register-input bg"
                            onChange={this.handleOnChange}
                            />
                            <div className="register-error">{this.state.errors.cellphone}</div>
                        <label htmlFor="tel" className="register-label">Telefono</label>
                    </div>
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
                </div>
                <div className="register-read">
                    <input 
                        type="checkbox" 
                        name="check" 
                        id="check"
                        required
                        className="register-check"
                        onChange={ this.handleOnChange } />
                        <div className="register-error">{this.state.errors.check}</div>
                    <label htmlFor="check" className="register-label">He leído los <span>terminos de uso.</span></label>
                </div>
                <div className="register-captcha">
                    <Recaptcha
                        sitekey="6LeVuZYUAAAAAL1YO5NBgZNSlsaFUbvgZl-uPyrn"
                        render="explicit"
                        onloadCallback={this.recaptchaLoaded}
                        verifyCallback={this.verifyCallback}
                    />
                </div>
                <div className="register-button">
                    <input 
                        type="submit" 
                        value={`${this.state.isVerify}`} 
                        className="register-submit"/>
                </div>
                <div className="register-information">
                    <p className="register-term">¿Tienes una cuenta? Haga click <Link to="/login" className="register-strong">aquí</Link> para iniciar sesion.</p>
                </div>
            </form>
        )
    }
}

export default Form;