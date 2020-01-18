import React from 'react';
import swal from 'sweetalert';
import RequestApi from '../../helpers/RequestApi';

class Form_2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            emails: '',
            names: '',
            countrys: '',
            messages: '',
            errors: {},
            isVerify: 'Enviar mensaje',
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.Ajax = new RequestApi();
    }

    handleOnChange(e) { 
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit(e) {
        const url = `https://alycoinappweb.appspot.com/alyfundation/post/email/alyfundation/help`;
        const objectSend = {
            name: this.state.names,
            country: this.state.countrys,
            email: this.state.emails,
            info: this.state.messages
        }
        console.log('entro')
        e.preventDefault();
        console.log(this.validateForm())
        if(this.validateForm()) {
            console.log(objectSend);
            console.log('entro a la validacion')
            this.setState({ isVerify: 'Enviando mensaje...' })
            this.Ajax.requestApi(url, 'POST', objectSend)
                .then(response => {
                    console.log(response)
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
        let { emails, names, countrys, messages} = this.state;
        let errors = {};
        let formIsValid = true;

        if(!names) {
            formIsValid = false;
            errors["names"] = "*Por favor ingrese su nombre";
        }

        if(typeof names !== "undefined") {
            if(!names.match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["names"] = "*Por favor ingrese digitos validos.";
            }
        }
   // -----------------------------------------------------------------------------------     
        if(!emails) {
            formIsValid = false;
            errors["emails"] = "*Por favor ingrese el correo";
        }
        if(typeof emails !== "undefined") {
            const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if(!pattern.test(emails)) {
                formIsValid = false;
                errors["emails"] = "*Por favor ingrese un correo valido";
            }
        }
        if(!countrys) {
            formIsValid = false;
            errors["countrys"] = "*Por favor ingrese el pais."
        }
    // -----------------------------------------------------------------------------------

        if(!messages) {
            formIsValid = false;
            errors["messages"] = "*Por favor ingresa el mensaje.";
        }

    // -----------------------------------------------------------------------------------

        this.setState({
            errors: errors
        })
        return formIsValid;
    }

    render() {
        return (
            <form className="alyfundation-form-2" onSubmit={ this.handleOnSubmit } autoComplete="off" >
                <div className={`alyfundation-group ${this.state.errors.names ? 'login-border' : ''}`}>
                    <input 
                        type="text"
                        placeholder="Nombre" 
                        className="alyfundation-input"
                        name="names"
                        id="name"
                        required
                        onChange={ this.handleOnChange }
                        />
                    <div className="register-error">{this.state.errors.names}</div>
                    <label className="alyfundation-label" htmlFor="name">Nombre</label>
                </div>
                
                <div className={`alyfundation-group ${this.state.errors.countrys ? 'login-border' : ''}`}>
                    <input 
                        type="text"
                        placeholder="País"
                        name="countrys"
                        id="country"
                        required
                        className="alyfundation-input bg"
                        onChange={this.handleOnChange}
                        />
                        <div className="alyfundation-error">{this.state.errors.countrys}</div>
                    <label htmlFor="country" className="alyfundation-label">País de ayuda</label>
                </div>
                <div className={`alyfundation-group ${this.state.errors.emails ? 'login-border' : ''}`}>
                    <input 
                        type="email"
                        placeholder="Correo" 
                        className="alyfundation-input"
                        name="emails"
                        id="email"
                        required
                        onChange={ this.handleOnChange }
                        />
                        <div className="alyfundation-error">{this.state.errors.emails}</div>
                    <label className="alyfundation-label" htmlFor="email">Correo</label>
                </div>
                <div className="alyfundation-group">
                    <textarea 
                        name="messages"
                        required
                        onChange={this.handleOnChange}
                        placeholder="Expone el caso que necesitas ayuda."
                        className="alyfundation-message">
                    </textarea>
                </div>
                <div className="alyfundation-button-2">
                    <input 
                        type="submit" 
                        value={`${this.state.isVerify}`} 
                        className="alyfundation-submit"/>
                </div>
            </form>
        )
    }
}

export default Form_2;