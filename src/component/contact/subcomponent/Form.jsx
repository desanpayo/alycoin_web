import React from 'react';
import WOW from 'wowjs';
import swal from 'sweetalert';
import RequestApi from '../../helpers/RequestApi';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {},
            isVerify: 'Enviar mensaje',
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.Ajax = new RequestApi();
    }
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }

    handleOnChange(e) { 
        const fields = this.state.fields;
        fields[e.target.name] = e.target.value;

        this.setState({
            fields
        })
    }

    handleOnSubmit(e) {
        const url = `https://alycoinappweb.appspot.com/contact/post/email/alycoin/contact`;
        const objectSend = {
            name: this.state.fields["name"],
            country: this.state.fields["country"],
            email: this.state.fields["email"],
            info: this.state.fields["message"]
        }
        e.preventDefault();
        if(this.validateForm()) {
            this.setState({ isVerify: 'Enviando mensaje...' })
            this.Ajax.requestApi(url, 'POST', objectSend)
                .then(response => {
                    if(response.status >= 200 && response.status < 300) {
                        if(response.data.error === "not send") {
                            this.setState({ isVerify: 'Enviar mensaje' })
                            swal({
                                title: "Error",
                                text: "No se ha podido enviar el mensaje, por favor intente de nuevo o mas tarde.",
                                icon: "error",
                                className: "alert-error"
                            })
                        }
                        if(response.data.success === "send is Successfully") {
                            swal({
                                text: "El mensaje se envio correctamente.",
                                icon: "success"
                            })
                        }
                    }
                })
        }else {
            this.setState({ isVerify: 'Enviar mensaje' })
        }
    }

    validateForm() {
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

        if(!fields["message"]) {
            formIsValid = false;
            errors["message"] = "*Por favor ingresa el mensaje.";
        }

    // -----------------------------------------------------------------------------------

        this.setState({
            errors: errors
        })
        return formIsValid;
    }

    render() {
        return (
            <form className="contact-form" onSubmit={this.handleOnSubmit}>
                <div className="contact-info wow bounceInUp">
                    <div className={`contact-group ${this.state.errors.name ? 'login-border' : '' }`}>
                        <input
                            type="text"
                            className="contact-input" 
                            placeholder="Nombre"
                            required
                            onChange={this.handleOnChange}
                            name="name"/>
                            <div className="register-error">{this.state.errors.name}</div>
                    </div>
                    <div className={`contact-group ${this.state.errors.email ? 'login-border' : '' }`}>
                        <input 
                            type="text"
                            className="contact-input"
                            placeholder="Correo"
                            required
                            onChange={this.handleOnChange}
                            name="email"/>
                            <div className="register-error">{this.state.errors.email}</div>
                    </div>
                </div>
                <div className={`contact-group wow bounceInUp ${this.state.errors.message ? 'login-border' : '' } `}>
                    <textarea 
                        name="message"
                        required
                        onChange={this.handleOnChange}
                        placeholder="Mensaje"
                        className="contact-message">
                    </textarea>
                    <div className="register-error">{this.state.errors.message}</div>
                </div>
                <input 
                    type="submit"
                    value={this.state.isVerify}
                    className="contact-submit wow bounceInUp"/>
            </form>
        )
    }
}

export default Form;