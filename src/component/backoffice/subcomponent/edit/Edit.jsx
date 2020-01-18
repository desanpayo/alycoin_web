import React from 'react';
import Country from '../../../register/subcomponent/Country';
import RequestApi from '../../../helpers/RequestApi';
import swal from 'sweetalert';
import AuthMethod from '../../../helpers/Auth';

class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: {},
            country: [],
            first_name: '',
            last_name: '',
            country_user: '',
            phone: '',
            id: '',
            pin: '',
            created: '',
            bitcoin: '',
            litecoin: '',
            dash: '',
            ethereum: '',
            alycoin: '',
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnSend = this.handleOnSend.bind(this);
        this.Ajax = new RequestApi();
        this.Auth = new AuthMethod();
    }

    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSend() {
        const url = `https://alycoinappweb.appspot.com/users/pin/generate`;
        const userId = {
            id: this.state.id
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
                                    text: "El pin para actualizar tu cuenta no se pudo generar, intentelo de nuevo o mas tarde.",
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
        const url = `https://alycoinappweb.appspot.com/users/pin/verify`;
        e.preventDefault();

        if(this.validateUpdate()) {
            const updateUser = {
                pin:this.state.pin,
                first_name:this.state.first_name,
                last_name: this.state.last_name,
                country: this.state.country_user,
                phone: this.state.phone,
                wbtc: this.state.bitcoin,
                wdash: this.state.dash,
                wethereum: this.state.ethereum,
                wlitecoin: this.state.litecoin,
                walycoin: this.state.alycoin,
            }
            this.Ajax.requestApi(url, 'POST', updateUser)
                .then(response => {
                    if(response.status >= 200 && response.status < 300) {
                        if(response.data.error === "pin is invalid or has expired") {
                            return swal({
                                        title: "Error",
                                        text: "El pin es invalido o ha expirado",
                                        icon: "error"
                                    })
                        }
                        if(response.data.success === "Great! is all ready") {
                            swal({
                                text: "Su cuenta ha sido actulizada correctamente, inicie sesión nuevamente para reflejar los cambios.",
                                icon: "success"
                            })
                            this.Auth.logout();
                            this.props.history.replace("/login");
                        }
                    } else {
                        const error = new Error(response.statusText);
                        error.response = response;
                        throw error;
                    }
                })
        }
    }

    validateUpdate() {
        let first_name = this.state.first_name,
            last_name = this.state.last_name,
            phone = this.state.phone,
            pin = this.state.pin
        let errors = {};
        let formIsValid = true;

        if(!first_name) {
            formIsValid = false;
            errors["name"] = "*Por favor ingrese su nombre";
        }

        if(typeof first_name !== "undefined") {
            if(!first_name.match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["name"] = "*Por favor ingrese digitos validos.";
            }
        }

        if(!last_name) {
            formIsValid = false;
            errors["lastname"] = "*Por favor ingrese su apellido";
        }

        if(typeof last_name !== "undefined") {
            if(!last_name.match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["lastname"] = "*Por favor ingrese digitos validos.";
            }
        }
    // -----------------------------------------------------------------------------------

        if(!phone) {
            formIsValid =  false;
            errors["cellphone"] = "*Por favor ingrese el telefono";
        }

        if(!pin) {
            formIsValid = false;
            swal({
                title: "Error",
                text: "Por favor ingrese el pin de seguridad para poder actualizar su cuenta",
                icon: "error"
            })
        }

        this.setState({
            errors: errors
        })
        return formIsValid;
    }  

    async componentDidMount() {
        const url = `https://alycoinappweb.appspot.com/countries/allcountries`;
        const response = await this.Ajax.requestApi(url, 'GET');
        this.setState({
            country: response.data,
            first_name: this.props.user.first_name,
            last_name: this.props.user.last_name,
            country_user: this.props.user.country,
            phone: this.props.user.phone,
            created: this.props.user.created,
            id: this.props.user.id,
            bitcoin: this.props.user.userwallet.wbtc ? this.props.user.userwallet.wbtc : '',
            dash: this.props.user.userwallet.wdash ? this.props.user.userwallet.wdash : '',
            litecoin: this.props.user.userwallet.wlitecoin ? this.props.user.userwallet.wlitecoin : '',
            ethereum: this.props.user.userwallet.wethereum ? this.props.user.userwallet.wethereum : '',
            alycoin: this.props.user.userwallet.walycoin ? this.props.user.userwallet.walycoin : '',
        });
    }

    render() {
        return (
            <div className="l-edit">
                <div className="edit-header container max-content">
                    <h2 className="edit-account">Cuenta</h2>
                    <div className="edit-date">
                        <p className="edit-register">Registrado: <span>{this.state.created}</span></p>
                    </div>
                </div>
                <section className="edit-content container max-content">
                    <div className="edit-content-title">Datos Personales</div>
                    <form onSubmit={ this.handleOnSubmit } className="edit-form" autoComplete="off">
                         <div className={`edit-group ${this.state.errors.name ? 'login-border' : ''}`}>
                            <input 
                                type="text"
                                placeholder="Por favor ingrese su nombre" 
                                className="edit-input"
                                name="first_name"
                                id="first_name"
                                value={this.state.first_name}
                                required
                                onChange={ this.handleOnChange }
                                />
                            <div className="edit-error">{this.state.errors.name}</div>
                            <label className="edit-label" htmlFor="name">Nombre</label>
                        </div>
                        
                        <div className={`edit-group ${this.state.errors.lastname ? 'login-border' : ''}`}>
                            <input 
                                type="text"
                                placeholder="Por favor ingrese su apellido" 
                                className="edit-input"
                                name="last_name"
                                id="last_name"
                                value={this.state.last_name}
                                required
                                onChange={ this.handleOnChange }
                                />
                            <div className="edit-error">{this.state.errors.lastname}</div>
                            <label className="edit-label" htmlFor="last_name">Apellido</label>
                        </div>
                        <div className="edit-select-content">
                            <select className="edit-select" name="country_user" id="country_user" onChange={ this.handleOnChange }>
                                <option value={this.state.country_user} defaultValue>{this.state.country_user}</option>
                                { Object.keys(this.state.country).map(key => (
                                    <Country country={this.state.country[key]} key={key} />
                                ))}
                            </select>
                            <label htmlFor="country_user" className="edit-label">País</label>
                        </div>
                        <div className={`edit-group ${this.state.errors.cellphone ? 'login-border' : ''}`}>
                            <input 
                                type="text"
                                placeholder="Telefono"
                                name="phone"
                                id="tel"
                                required
                                value={this.state.phone}
                                className="edit-input bg"
                                onChange={this.handleOnChange}
                                />
                                <div className="edit-error">{this.state.errors.cellphone}</div>
                            <label htmlFor="tel" className="edit-label">Telefono</label>
                        </div>
                        <div className="edit-crypto">
                            <h2 className="edit-crypto-title">Información del pago</h2>
                            <div className={`edit-group-crypto`}>
                                <input 
                                    type="text"
                                    placeholder="1BoatSLRHtKNngkdXEeobR76b53LETtpyT"
                                    name="bitcoin"
                                    id="bitcoin"
                                    value={this.state.bitcoin}
                                    className="edit-input bg"
                                    onChange={this.handleOnChange}
                                    />
                                <label htmlFor="bitcoin" className="edit-label">Bitcoin</label>
                            </div>
                            <div className={`edit-group-crypto`}>
                                <input 
                                    type="text"
                                    placeholder="xSBoatSLRHtKNngkdSWAobR76b53LEThgyX"
                                    name="litecoin"
                                    id="litecoin"
                                    value={this.state.litecoin}
                                    className="edit-input bg"
                                    onChange={this.handleOnChange}
                                    />
                                <label htmlFor="litecoin" className="edit-label">Litecoin</label>
                            </div>
                            <div className={`edit-group-crypto`}>
                                <input 
                                    type="text"
                                    placeholder="DevoathLRHtyNngkdSWAobR76b53LEnhgOP"
                                    name="dash"
                                    id="dash"
                                    value={this.state.dash}
                                    className="edit-input bg"
                                    onChange={this.handleOnChange}
                                    />
                                <label htmlFor="dash" className="edit-label">Dash</label>
                            </div>
                            <div className={`edit-group-crypto`}>
                                <input 
                                    type="text"
                                    placeholder="VcxoathLRHtyNYYWqkdSWAobR76b53LEnhkL"
                                    name="ethereum"
                                    id="ethereum"
                                    value={this.state.ethereum}
                                    className="edit-input bg"
                                    onChange={this.handleOnChange}
                                    />
                                <label htmlFor="ethereum" className="edit-label">Ethereum</label>
                            </div>
                            <div className={`edit-group-crypto`}>
                                <input 
                                    type="text"
                                    placeholder="NYYWqkdSWAobR76b53LEnhkMgtdcgyFdcvgP"
                                    name="alycoin"
                                    id="alycoin"
                                    value={this.state.alycoin}
                                    className="edit-input bg"
                                    onChange={this.handleOnChange}
                                    />
                                <label htmlFor="alycoin" className="edit-label">Alycoin</label>
                            </div>
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
                        <div className="edit-button">
                            <input 
                                type="submit" 
                                value="Actualizar cuenta" 
                                className="edit-submit"/>
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}

export default Edit;