import React from 'react';
import Country from '../../register/subcomponent/Country';
import swal from 'sweetalert';
import RequestApi from '../../helpers/RequestApi';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            country: '',
            fields: {},
            errors: {},
            isVerify: 'Enviar mensaje',
        }

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.Ajax = new RequestApi();
    }

    handleOnChange(e) { 
        const fields = this.state.fields;
        fields[e.target.name] = e.target.value;

        this.setState({
            fields
        })
    }

    handleOnSubmit(e) {
        const url = `https://alycoinappweb.appspot.com/alyfundation/post/email/alyfundation/voluntary`;
        const objectSend = {
            name: this.state.fields["name"],
            country: this.state.fields["country"],
            phone: this.state.fields["cellphone"],
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
            errors["message"] = "*Por favor ingrese el mensaje.";
        }

        if(!fields["cellphone"]) {
            formIsValid =  false;
            errors["cellphone"] = "*Por favor ingrese el telefono";
        }

    // -----------------------------------------------------------------------------------

        this.setState({
            errors: errors
        })
        return formIsValid;
    }

    render() {
        return (
            <form className="alyfundation-form" onSubmit={ this.handleOnSubmit } autoComplete="off" >
                <div className={`alyfundation-group ${this.state.errors.name ? 'login-border' : ''}`}>
                    <input 
                        type="text"
                        placeholder="Nombre" 
                        className="alyfundation-input"
                        name="name"
                        id="name"
                        required
                        onChange={ this.handleOnChange }
                        />
                    <div className="register-error">{this.state.errors.name}</div>
                    <label className="alyfundation-label" htmlFor="name">Nombre</label>
                </div>
                <div className="alyfundation-select-content">
                    <select className="alyfundation-select" name="country" id="country" onChange={ this.handleOnChange }>
                        <option value="" disabled defaultValue>Selecciona tu país</option>
                        { Object.keys(this.props.country).map(key => (
                            <Country country={this.props.country[key]} key={key} />
                        ))}
                    </select>
                    <label htmlFor="country" className="alyfundation-label">País</label>
                </div>
                <div className={`alyfundation-group ${this.state.errors.cellphone ? 'login-border' : ''}`}>
                    <input 
                        type="text"
                        placeholder="Telefono"
                        name="cellphone"
                        id="tel"
                        required
                        className="alyfundation-input bg"
                        onChange={this.handleOnChange}
                        />
                        <div className="alyfundation-error">{this.state.errors.cellphone}</div>
                    <label htmlFor="tel" className="alyfundation-label">Telefono</label>
                </div>
                <div className={`alyfundation-group ${this.state.errors.email ? 'login-border' : ''}`}>
                    <input 
                        type="email"
                        placeholder="Correo" 
                        className="alyfundation-input"
                        name="email"
                        id="email"
                        required
                        onChange={ this.handleOnChange }
                        />
                        <div className="alyfundation-error">{this.state.errors.email}</div>
                    <label className="alyfundation-label" htmlFor="email">Correo</label>
                </div>
                <div className="alyfundation-group">
                    <textarea 
                        required
                        name="message"
                        placeholder="Area de apoyo"
                        onChange={ this.handleOnChange }
                        className="alyfundation-message">
                    </textarea>
                    <div className="alyfundation-error">{this.state.errors.message}</div>
                </div>
                <div className="alyfundation-button">
                    <input 
                        type="submit" 
                        value={`${this.state.isVerify}`} 
                        className="alyfundation-submit"/>
                </div>
            </form> 
        )
    }
}

export default Form;