import React, { Component } from 'react';
import Cryptocurrency from './subcomponent/Cryptocurrency';

// import images
import img_dash from '../../assets/img/img-dash-logo.png';
import img_litecoin from '../../assets/img/img-litecoin-logo.png';
import img_ethereum from '../../assets/img/img-ethereum-logo.png';
import img_bitcoin from '../../assets/img/img-bitcoin-logo.png';
import img_alycoin from '../../assets/img/img-logo-1.png';

class Fixedbar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			bitcoin: [],
			litecoin: [],
			dash: [],
			ethereum: []
		};
	}

	async componentDidMount() {
		const bitcoin = await fetch(`https://api.coinmarketcap.com/v1/ticker/bitcoin/`);
		const bit = await bitcoin.json();

		const litecoin = await fetch(`https://api.coinmarketcap.com/v1/ticker/litecoin/`);
		const lite = await litecoin.json();

		const ethereum = await fetch(`https://api.coinmarketcap.com/v1/ticker/ethereum/`);
		const eth = await ethereum.json();

		const dash = await fetch(`https://api.coinmarketcap.com/v1/ticker/dash/`);
		const das = await dash.json();

		this.setState({ bitcoin: bit[0], litecoin: lite[0], ethereum: eth[0], dash: das[0] });
	}

	render() {
		const { bitcoin, litecoin, ethereum, dash } = this.state;

		return (
			<div className="l-fixebar">
				<div className="fixebar">
					<Cryptocurrency
						img={img_bitcoin}
						name={bitcoin.name}
						symbol={bitcoin.symbol}
						price={bitcoin.price_usd}
						change={bitcoin.percent_change_1h}
					/>
					<Cryptocurrency
						img={img_litecoin}
						name={litecoin.name}
						symbol={litecoin.symbol}
						price={litecoin.price_usd}
						change={litecoin.percent_change_1h}
					/>
					<Cryptocurrency
						img={img_ethereum}
						name={ethereum.name}
						symbol={ethereum.symbol}
						price={ethereum.price_usd}
						change={ethereum.percent_change_1h}
					/>
					<Cryptocurrency
						img={img_dash}
						name={dash.name}
						symbol={dash.symbol}
						price={dash.price_usd}
						change={dash.percent_change_1h}
					/>
					<Cryptocurrency img={img_alycoin} name="Alycoin" symbol="ALY" price="1" change="" />
				</div>
			</div>
		);
	}
}

export default Fixedbar;
