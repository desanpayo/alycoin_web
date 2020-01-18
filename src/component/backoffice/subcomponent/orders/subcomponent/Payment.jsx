import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import QRCode from 'qrcode.react';
import RequestApi from '../../../../helpers/RequestApi';
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';

class Payment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hash: '',
            verify: 'Enviar',
            walycoin: '',
            redirect: false,
            price_bitcoin: '',
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

    async componentDidMount() {
        const bitcoin = await fetch(`https://api.coinmarketcap.com/v1/ticker/bitcoin/`);
        const bit = await bitcoin.json();
        const price_bitcoin = bit[0].price_usd;

        this.setState({
            walycoin: this.props.walycoin,
            price_bitcoin: price_bitcoin
        })
    }

    handleOnSubmit(e) {
        e.preventDefault();
        if(this.validateHash()) {
            swal({
                title: "¿Estás seguro que tu wallet de alycoin es correcta?",
                text: "Una vez enviado no podra cambiar",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
              .then((willDelete) => {
                if (willDelete) {
                    this.setState({ verify: "Verificando..." });
                    const url = `https://alycoinappweb.appspot.com/backoffice/verify/pay`;
                    const userHash = {
                        waytopay: this.props.invoice.waytopay,
                        hash: this.state.hash,
                        total: this.props.convert
                    }
                    this.Ajax.requestApi(url, 'POST', userHash)
                        .then(response => {
                            if(response.status >= 200 && response.status < 300) {
                                if(response.data.error === "the hash is not correct please check") {
                                    this.setState({ verify: "Enviar" });
                                    return swal({
                                                title: "Error",
                                                text: "El hash ingresado no es valido.",
                                                icon: "error"
                                            })
                                }
                                if(response.data.error === "its not confirmed") {
                                    this.setState({ verify: "Enviar" });
                                    return swal({
                                                title: "Error",
                                                text: "El hash ingresado es incorrecto o no existe.",
                                                icon: "error"
                                            })
                                }
                                if(response.data.error === "you did not send the amount necessary to accept your transaction") {
                                    this.setState({ verify: "Enviar" });
                                    return swal({
                                                title: "Error",
                                                text: "El monto de la transacción no coincide con el monto de la factura.",
                                                icon: "error"
                                            })
                                }
                                if(response.data.error === "We have not found our wallet in your transaction") {
                                    this.setState({ verify: "Enviar" });
                                    return swal({
                                                title: "Error",
                                                text: "No se ha podido verificar nuestra wallet en su hash de transaccion, verifique la wallet de destino, la que se muestra en la factura.",
                                                icon: "error"
                                            })
                                }
                                if(response.data.error === "it already exist") {
                                    this.setState({ verify: "Enviar" })
                                    return swal({
                                                title: "Error",
                                                text: "El hash ingresado ya ha sido utilizado en otra transacción.",
                                                icon: "error"
                                            })
                                }
                                if(response.data.error === "please send the correct payment form") {
                                    this.setState({ verify: "Enviar" });
                                    return swal({
                                                title: "Error",
                                                text: "La forma de pago no es correcta, por favor asegurese que la forma de pago valida.",
                                                icon: "error"
                                            })
                                } 
                                if(response.data.success === "the hash is confirmed") {
                                    this.setState({ verify: "Procesando..." });
                                    const url_valid = `https://alycoinappweb.appspot.com/sales/register`;
                                    const userValid = {
                                        id_user: this.props.id,
                                        package_id: this.props.invoice.name_package,
                                        package_amount: this.props.invoice.price,
                                        price_usd: this.state.price_bitcoin,
                                        coin: "btc",
                                        pay_method: this.props.invoice.waytopay,
                                        bill: this.props.invoice.id,
                                        walycoin: this.state.walycoin,
                                        hash: this.state.hash,
                                        country: this.props.country
                                    }
                                    this.Ajax.requestApi(url_valid, 'POST', userValid)
                                        .then(response => {
                                            console.log(response)
                                            if(response.status >= 200 && response.status < 300) {
                                                if(response.data.error === "something is wrong, check record of level1 commissions") {
                                                    console.log("no se registraron las comisiones para el nivel 1");
                                                }
                                                if(response.data.error === "something is wrong, check record of level2 commissions") {
                                                    console.log("no se registraron las comisiones para el nivel 2");
                                                }
                                                if(response.data.error === "something is wrong, check record of level3 commissions") {
                                                    console.log("no se registraron las comisiones para el nivel 3");
                                                }
                                                if(response.data.error === "something is wrong, check record of level4 commissions") {
                                                    console.log("no se registraron las comisiones para el nivel 4");
                                                }
                                                if(response.data.error === "user is not exist") {
                                                    swal({
                                                        title: "Error",
                                                        text: "El usuario no existe",
                                                        icon: "error"
                                                    })
                                                }
                                                if(response.data.error === "something is wrong, check record of sales") {
                                                    swal({
                                                        title: "Error",
                                                        text: "No se ha podido registrar su compra, por favor intente nuevamente.",
                                                        icon: "error"
                                                    })
                                                }
                                                if(response.data.success === "has been successfully") {
                                                    Swal.fire({
                                                        text: 'Su transacción a sido exitosa en un instante sus alycoin estaran disponibles en su wallet, gracias por la espera.',
                                                        animation: false,
                                                        customClass: {
                                                            popup: 'animated tada'
                                                        }
                                                    })
                                                    this.setState({
                                                        redirect: true
                                                    })
                                                }
                                            }
                                        })
                                }
                            } else {
                                const error = new Error(response.statusText);
                                error.response = response;
                                throw error;
                            }
                        })
                }
              });
            
        } else {
            this.setState({verify: 'Enviar'});
        }
    }

    validateHash() {
        let hash = this.state.hash,
            walycoin = this.state.walycoin;
        let formIsValid = true;

        if(!hash) {
            formIsValid = false;
            swal({
                title: "Error",
                text: "Por favor ingrese el hash de confimación.",
                icon: "error"
            })
        }

        if(!walycoin) {
            formIsValid = false;
            swal({
                title: "Error",
                text: "Por favor ingresar su wallet de alycoin",
                icon: "error"
            })
        }

        this.setState({
            formIsValid: formIsValid
        })
        return formIsValid;
    }

    render() {
        let value = `${this.props.wallet.txt}`;
        return (
            <section className="order-payment">
                <div className="order-head">
                    <h2 className="order-title">Pago de factura</h2>
                    <p className="order-payment-paragraph">Monto a pagar: <span className="order-payment-span">{this.props.convert}</span></p>
                </div>
                <div className="order-payment-content">
                    <div className="order-payment-qr">
                        <QRCode value={ this.props.wallet.txt } />
                    </div>
                    <div className="order-payment-input-content">
                        <input className="order-payment-input" type="text" placeholder="Wallet" disabled value={`${value}`} />
                        <CopyToClipboard text={value}>
                            <button className="order-payment-button" > Copiar
                                <i className="fas fa-copy"></i>
                            </button>
                        </CopyToClipboard> 
                    </div>
                </div>
                <form onSubmit={this.handleOnSubmit} className="order-payment-hash" autoComplete="off">
                    <p className="order-payment-legend">El hash es un identificador único de cada transacción enviada.</p>
                    <p className="order-payment-legend-subtitle">(Puedes encontrarla con varios nombres segun su wallet por ejemplo: Transaction id, Hash o TXID)</p>
                    <input 
                        type="text" 
                        id="hash"
                        name="hash"  
                        onChange={this.handleOnChange} 
                        placeholder="Por favor ingrese el hash de confimacion"
                        className={`order-payment-input-alt`} 
                    />
                    <div className="order-payment-flex">
                        <input
                            type="text" 
                            name="walycoin" 
                            id="walycoin"
                            value={this.state.walycoin}
                            placeholder="Wallet de alycoin"
                            className="order-payment-input"
                            onChange={this.handleOnChange}
                        />
                    </div>
                    <input type="submit" value={this.state.verify} className="order-payment-submit"/>
                </form>
                {
                    this.state.redirect ? <Redirect to={{
                        pathname: `/backoffice`
                    }} /> : ''
                }
            </section>
        )
    }
}

export default Payment;