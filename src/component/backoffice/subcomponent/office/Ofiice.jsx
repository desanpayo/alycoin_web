import React from 'react';

import Alytravel from './alytravel/Alytravel';
import Reffer from './reffer/Reffer';
import Progress from './progress/Progress';
import AuthMethod from '../../../helpers/Auth';
import Table from './direct/Table';
import hashId from 'hashids';
import Main from './main/Main';
import Footer from '../../../footer/Footer';
import requestApi from '../../../helpers/RequestApi';
import Swal from 'sweetalert2';
import pro from '../../../../assets/img/img-pro-2.jpeg';

class Office extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: this.props.user,
			commissions: '',
			status: false
		};
		this.Auth = new AuthMethod();
		this.hash = new hashId();
		this.Ajax = new requestApi();
	}

	async componentDidMount() {
		const url = `https://alycoinappweb.appspot.com/backoffice/commissions/direct`;
		const commission = {
			id: this.state.user.id,
			limit: 10
		};
		const response = await this.Ajax.requestApi(url, 'POST', commission);
		this.setState({
			commissions: response.data
		});
		if (this.state.status === false) {
			Swal.fire({
				title: 'Aprovecha nuevo precio!',
				//text: 'Aprovecha nuestras promociones.',
				imageUrl: pro,
				imageWidth: 350,
				imageHeight: 250,
				imageAlt: 'Nuevo precio',
				animation: false
			});
			this.setState({
				status: true
			});
		}
	}

	render() {
		const hashId = this.hash.encodeHex(`${this.state.user.id}`);
		return (
			<div className="l-backoffice">
				<Main />
				<div className="backoffice max-content container">
					<Alytravel />
					<Reffer name={this.state.user.first_name} id={hashId} />
					<Progress id={this.state.user.id} />
					<Table data={this.state.commissions} />
				</div>
				<Footer />
			</div>
		);
	}
}

export default Office;
