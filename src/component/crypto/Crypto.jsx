import React from 'react';
import CardApi from './subcomponent/CardApi';
import WOW from 'wowjs';

class Crypto extends React.Component {
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
		new WOW.WOW({
			live: false
		}).init();

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
			<div className="l-crypto margin-top">
				<h2 className="crypto-title wow fadeInLeftBig">
					<span>P</span>recio <span>C</span>riptomonedas
				</h2>
				<div className="container max-content crypto">
					<CardApi name="AlyCoin" price_usd="1" percent_change_1h="" />
					<CardApi
						name={bitcoin.name}
						price_usd={bitcoin.price_usd}
						percent_change_1h={bitcoin.percent_change_1h}
					/>
					<CardApi name={dash.name} price_usd={dash.price_usd} percent_change_1h={dash.percent_change_1h} />
					<CardApi
						name={litecoin.name}
						price_usd={litecoin.price_usd}
						percent_change_1h={litecoin.percent_change_1h}
					/>
					<CardApi
						name={ethereum.name}
						price_usd={ethereum.price_usd}
						percent_change_1h={ethereum.percent_change_1h}
					/>
				</div>
			</div>
		);
	}
}

export default Crypto;
