import React from 'react';
import Card from './subcomponent/Card';
import money from './subcomponent/money';
import Particle from '../../../particles/Particle';
import Footer from '../../../footer/Footer';
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert';
import RequestApi from '../../../helpers/RequestApi';
import Swal from 'sweetalert2';
import pro from '../../../../assets/img/img-pro-2.jpeg';

class Package extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			active: '',
			redirect: false,
			method: '',
			verify: [],
			invoice: [],
			value: 'Generar Orden',
			walycoin: '',
			status: false
		};
		this.handleOnClick = this.handleOnClick.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
		this.Ajax = new RequestApi();
	}

	handleOnChange(e) {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleOnClick(e) {
		e.preventDefault();
		if (this.state.active === '') {
			swal({
				title: 'Error',
				text: 'Por favor seleccionar un paquete antes de generar la orden.',
				icon: 'error'
			});
		}
		if (this.state.method === '') {
			swal({
				title: 'Error',
				text: 'Por favor seleccionar el metodo de pago.',
				icon: 'error'
			});
		}

		if (this.props.wallet || this.state.walycoin) {
			if (this.state.active && this.state.method) {
				let verify = this.state.verify;
				switch (this.state.active) {
					case '1':
						verify['package'] = 'Vip';
						verify['price'] = '100000';
						verify['crypto'] = '100000';
						break;
					case '2':
						verify['package'] = 'Diamond';
						verify['price'] = '50000';
						verify['crypto'] = '50000';
						break;
					case '3':
						verify['package'] = 'Platinum';
						verify['price'] = '10000';
						verify['crypto'] = '10000';
						break;
					case '4':
						verify['package'] = 'Golden';
						verify['price'] = '5000';
						verify['crypto'] = '5000';
						break;
					case '5':
						verify['package'] = 'Silver';
						verify['price'] = '2000';
						verify['crypto'] = '2000';
						break;
					case '6':
						verify['package'] = 'Elite';
						verify['price'] = '1000';
						verify['crypto'] = '1000';
						break;
					case '7':
						verify['package'] = 'Master';
						verify['price'] = '500';
						verify['crypto'] = '500';
						break;
					case '8':
						verify['package'] = 'Premium';
						verify['price'] = '250';
						verify['crypto'] = '250';
						break;
					case '9':
						verify['package'] = 'Basic';
						verify['price'] = '100';
						verify['crypto'] = '100';
						break;
					case '10':
						verify['package'] = 'Regular';
						verify['price'] = '50';
						verify['crypto'] = '50';
						break;
					case '11':
						verify['package'] = 'Minimum';
						verify['price'] = '15';
						verify['crypto'] = '15';
						break;
					default:
						swal({
							title: 'Error',
							text: 'El paquete es invalido',
							icon: 'error'
						});
						break;
				}

				this.setState({
					verify: verify,
					value: 'Generando orden...'
				});

				const url = `https://alycoinappweb.appspot.com/backoffice/create/invoice`;
				const sendInvoice = {
					id: this.props.id,
					waytopay: this.state.method,
					name_package: this.state.verify['package'],
					price: this.state.verify['price'],
					package_amount: this.state.verify['crypto'],
					name_company: 'alycoin'
				};

				this.Ajax.requestApi(url, 'POST', sendInvoice).then(response => {
					if (response.status >= 200 && response.status < 300) {
						if (response.data.error === 'user is not exist') {
							this.setState({
								value: 'Generar Orden'
							});
							return swal({
								title: 'Error',
								text: 'El id del usuario para generar la orden es invalido.',
								icon: 'error'
							});
						}
						if (response.data.error === 'its not possible to send the wallet') {
							this.setState({
								value: 'Generar Orden'
							});
							return swal({
								title: 'Error',
								text: 'No es posible obtener la informacion de la wallet',
								icon: 'error'
							});
						}
						if (response.data.error === 'its not possible to create invoice') {
							this.setState({
								value: 'Generar Orden'
							});
							return swal({
								title: 'Error',
								text: 'No se pudo generar su orden.',
								icon: 'error'
							});
						}

						if (response.data.success === 'has been created successfully') {
							this.setState({
								invoice: response.data,
								value: 'Generar orden',
								redirect: true
							});
						}
					} else {
						const error = new Error(response.statusText);
						error.response = response;
						throw error;
					}
				});
			}
		} else {
			swal('Por favor ingresa tu wallet de alycoin para poder generar la orden', {
				content: 'input'
			}).then(value => {
				if (value.length < 14) {
					swal({
						title: 'Error',
						text: 'Por favor ingrese una wallet valida.',
						icon: 'error'
					});
				} else {
					this.setState({
						walycoin: value
					});
				}
			});
		}
	}

	componentDidMount() {
		if (this.state.status === false) {
			Swal.fire({
				title: 'Aprovecha nuevo precio!',
				// text: 'Aprovecha la promocion de nuestros paquetes.',
				imageUrl: pro,
				imageWidth: 350,
				imageHeight: 250,
				imageAlt: 'Proximamente',
				animation: false
			});
			this.setState({
				status: true
			});
		}
	}

	setActive = id => this.setState({ active: id });

	render() {
		return (
			<div className="l-package">
				<div className="parallax">
					<div className="parallax-slide" />
					<Particle />
				</div>
				<div className="package container max-content">
					<div className="package-main">
						<div className="package-top">
							<h2 className="package-order">Crear nueva orden</h2>
						</div>
						<div className="package-bottom" onClick={this.handleActive}>
							{money.map(card => {
								let isActive = this.state.active === card.id;
								let className = isActive ? 'active' : '';
								return (
									<Card
										classActive={className}
										setActive={this.setActive}
										key={card.id}
										id={card.id}
										img={card.img}
										name={card.name}
										price={card.price}
									/>
								);
							})}
						</div>
						<div className="package-foot">
							<div className={`package-group`}>
								<select
									className="package-select"
									name="method"
									id="method"
									onChange={this.handleOnChange}
								>
									<option value="">Selecciona el metodo de pago</option>
									<option value="btc">Bitcoin extenal wallet</option>
									<option value="ltc">Litecoin extenal wallet</option>
									<option value="dash">Dash extenal wallet</option>
									<option value="eth">Ethereum extenal wallet</option>
								</select>
								<label className="package-label" htmlFor="method">
									Metodo de pago
								</label>
							</div>
							<div className="package-generate">
								<button onClick={this.handleOnClick} className="package-button-order">
									{this.state.value} <i className="fas fa-arrow-right" />
								</button>
							</div>
							{this.state.redirect ? (
								<Redirect
									to={{
										pathname: `/backoffice/orders`,
										state: {
											invoice: this.state.invoice,
											wallet: this.props.wallet ? this.props.wallet : this.state.walycoin,
											id: this.props.id,
											country: this.props.country
										}
									}}
								/>
							) : (
								''
							)}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Package;
