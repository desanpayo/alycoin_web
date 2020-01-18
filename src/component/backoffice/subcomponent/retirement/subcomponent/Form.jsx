import React from 'react';
import swal from 'sweetalert';
import { DatePicker } from '@y0c/react-datepicker';
import requestApi from '../../../../helpers/RequestApi';
import '@y0c/react-datepicker/assets/styles/calendar.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            method: '',
            wallet: '',
            pin: '',
            verify: 'Retirar',
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.Ajax = new requestApi();
        this.handleOnSend = this.handleOnSend.bind(this);

    }

    handleOnChange(e) {         
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSend() {
        const url = `https://alycoinappweb.appspot.com/users/pin/generate`;
        const userId = {
            id: this.props.id
        }
        this.Ajax.requestApi(url, 'POST', userId)
            .then(response => {
                if(response.status >= 200 && response.status < 300) {
                    if(response.data.error === "user is not exist") {
                        return swal({
                                    title: "Error",
                                    text: "No se ha podido enviar el pin, intentelo de nuevo o mas tarde.",
                                    icon: "error"
                                })
                    } 
                    if(response.data.error === "pin its not generate") {
                        return swal({
                                    title: "Error",
                                    text: "El pin para retirar no se pudo generar, intentelo de nuevo o mas tarde.",
                                    icon: "error"
                                })
                    } 
                    if(response.data.success === "Great! is all ready") {
                        swal({
                            text: "El pin fue enviado correctamente a su correo.",
                            icon: "success"
                        })
                    }
                } else {
                    const error = new Error(response.statusText);
                    error.response = response;
                    throw error;
                }
            })
    }

    handleOnSubmit(e) {
        e.preventDefault();
        if(this.validateForm()) {
            const url = `https://alycoinappweb.appspot.com/backoffice/withdrawal/request`;
            const retirementObject = {
                id: this.props.id,
                start: this.state.date1,
                end: this.state.date2,
                wallet: this.state.wallet,
                coin: this.state.method,
                pin: this.state.pin 
            }
            this.setState({
                verify: "Procesando..." 
            })
            this.Ajax.requestApi(url, 'POST', retirementObject)
                .then(response => { 
                    if(response.status >= 200 && response.status < 300) {
                        if(response.data.error === "you do not have funds in your account"){
                            this.setState({
                                verify: "Retirar"
                            })
                            swal({
                                text: `Lo sentimos, el monto mínimo de retiro es de $15 y usted intenta retirar $ ${response.data.amount} - (${response.data.amount_btc}btc) al precio coinmarketcap de ${response.data.btc}`,
                                icon: "error"
                            })
                        }
                        if(response.data.error === "something went wrong, not send the request"){
                            this.setState({
                                verify: "Retirar"
                            })
                            swal({
                                text: "No se ha podido registrar su solicitud de pago.",
                                icon: "error"
                            })
                        }
                        if(response.data.error === "pin is invalid or has expired"){
                            this.setState({
                                verify: "Retirar"
                            })
                            swal({
                                text: "El pin ingresado no es valido o ha expirado.",
                                icon: "error"
                            })
                        }
                        if(response.data.success === "successfully") {
                            this.setState({
                                verify: "Retirar",
                                redirect: true
                            })
                            swal({
                                text: "Su retiro se realizo correctamente.",
                                icon: "success"
                            })
                            this.props.history.replace("/backoffice/retirement");
                        }
                    } else {
                        const error = new Error(response.statusText);
                        error.response = response;
                        throw error;
                    }
                })
        }
    }

    validateForm() {
        let formIsValid = true;
        if(this.state.method === "") {
            formIsValid = false;
            swal({
                title: "Error",
                text: "Por favor seleccionar el metodo de pago",
                icon: "error"
            })
        }

        if(this.state.pin === "") {
            formIsValid = false;
            swal({
                title: "Error",
                text: "Por favor ingrese el pin de seguridad para poder retirar",
                icon: "error"
            })
        }

        if(this.state.date1 === undefined) {
            formIsValid = false;
            swal({
                title: "Error",
                text: "Por favor seleccionar la fecha inicial",
                icon: "error"
            }) 
        }
        if(this.state.date2 === undefined) {
            formIsValid = false;
            swal({
                title: "Error",
                text: "Por favor seleccionar la fecha final",
                icon: "error"
            }) 
        }
        if(this.state.date2 < this.state.date1) {
            formIsValid = false;
            swal({
                title: "Error",
                text: "La fecha final no debe ser menor que la fecha inicial.",
                icon: "error"
            }) 
        }
        if(this.state.wallet === "") {
            formIsValid = false;
            swal({
                title: "Error",
                text: "Por favor ingrese su wallet",
                icon: "error"
            }) 
        }
        return formIsValid;
    }

    onChange = (date) => {
        this.setState({
            date1: date
        })
    }
    onChange2 = (date) => {
        this.setState({
            date2: date
        })
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit} className="retirement-form">
                <div className="retirement-grid-form">
                    <div className="retirement-group">
                        <DatePicker locale="ko" onChange={this.onChange}/>
                        <label className="retirement-label" htmlFor="method">Fecha de inicio</label>
                    </div>
                    <div className="retirement-group">
                        <DatePicker locale="ko" onChange={this.onChange2}/>
                        <label className="retirement-label" htmlFor="method">Fecha final</label>
                    </div>
                </div>

                <div className={`package-group`}>
                    <select className="package-select" name="method" id="method" onChange={ this.handleOnChange }>
                        <option value="">Seleccionar</option>
                        <option value="btc">Bitcoin extenal wallet</option>
                        <option value="ltc">Litecoin extenal wallet</option>
                        <option value="dash">Dash extenal wallet</option>
                        <option value="eth">Ethereum extenal wallet</option>
                    </select>
                    <label className="package-label" htmlFor="method">Metodo de pago</label> 
                </div>
                <div className="edit-group-pin">
                    <input 
                        type="text"
                        placeholder="Pin de confimacion"
                        name="pin"
                        id="pin"
                        value={this.state.pin}
                        className="edit-input bg"
                        onChange={this.handleOnChange}
                        />
                    <label htmlFor="pin" className="edit-label">Pin de confirmación</label>
                    <div onClick={ this.handleOnSend } className="edit-send"><span>Recibir PIN</span></div>
                </div>
                 
                <input name="wallet" className="retirement-input" value={this.state.wallet} type="text" onChange={this.handleOnChange} placeholder="Wallet" />
                <input type="submit" value={this.state.verify} className="retirement-submit"/>
            </form>
        )
    }
}

export default Form;