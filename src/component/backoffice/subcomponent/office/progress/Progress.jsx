import React, { Component } from 'react';
import alytravel from '../../../../../assets/video/alytravel-circle.gif';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import requestApi from '../../../../helpers/RequestApi';
import swal from 'sweetalert';
import img from '../../../../../assets/img/img-logo-1.png';
// import Swal from 'sweetalert2'

class ProgressBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			alytravel: ''
		};
		this.Ajax = new requestApi();
	}

	componentDidMount() {
		const url = `https://alycoinappweb.appspot.com/alytravel/get/alypoints`;
		const alytravelObject = {
			id: this.props.id
		};

		this.Ajax.requestApi(url, 'POST', alytravelObject).then(response => {
			console.log(response);
			if (response.status >= 200 && response.status < 300) {
				if (response.data.error === 'user is not exist') {
					return swal({
						title: 'Error',
						text: 'El id usuario no es valido',
						icon: 'error'
					});
				}
				if (!response.data.error) {
					this.setState({
						alytravel: response.data
					});
				}
			} else {
				const error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
		});
	}

	render() {
		return (
			<section className="progress margin-top">
				<div className="progress-header">
					<h2>AlyTravel progreso</h2>
				</div>
				<div className="progress-body">
					<div className="progress-image">
						<img src={this.state.alytravel.image ? this.state.alytravel.image : img} alt="Paquete Aly" />
					</div>
					<div className="progress-content">
						<div className="progress-information">
							<span>{this.state.alytravel.porcent}%</span>
							<div className="progress-des">Completado</div>
						</div>
						<div className="progress-information">
							<span>
								{this.state.alytravel.points}/{this.state.alytravel.goal}
							</span>
							<p className="progress-des">Puntos</p>
						</div>
						<div className="progress-bar-content">
							<Progress
								percent={this.state.alytravel.porcent > 100 ? 100 : this.state.alytravel.porcent}
								status="success"
								theme={{
									success: {
										symbol: '🏄‍',
										color: '#3F93F7'
									}
								}}
							/>
							<p className="progress-description">
								Te hacen falta <span>{this.state.alytravel.remaining}</span> puntos para alcanzar la
								meta.
							</p>
						</div>
					</div>
					<div className="progress-alytravel">
						<img src={alytravel} alt="AlyTravel" />
					</div>
				</div>
				{/* {
                    this.state.alytravel.porcent === 100 
                    ?   Swal.fire({
                        title: 'Felicidades!',
                        text: 'Has completado los puntos de alytravel.',
                        imageUrl: '',
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: 'Custom image',
                        animation: true
                      })
                    : "" 
                } */}
			</section>
		);
	}
}

export default ProgressBar;
