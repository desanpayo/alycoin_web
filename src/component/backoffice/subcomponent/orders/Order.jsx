import React from 'react';
import Sidebar from './subcomponent/Sidebar';
import Payment from './subcomponent/Payment';
import Footer from '../../../footer/Footer';
import { Redirect } from 'react-router-dom';

class Order extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            data: '',
            convert: '',
        }
    }

    async componentDidMount() {
        if(this.props.location.state) {
            let crypto = this.props.location.state.invoice.invoice.waytopay;
            let price = this.props.location.state.invoice.invoice.price;
            let convert = ''; 
            
            if(crypto === "dash") {
                const dash = await fetch(`https://api.coinmarketcap.com/v1/ticker/dash/`);
                const das = await dash.json();
                convert = price / das[0].price_usd;
            }
            if(crypto === "ltc") {
                const litecoin = await fetch(`https://api.coinmarketcap.com/v1/ticker/litecoin/`);
                const lite = await litecoin.json();
                convert = price / lite[0].price_usd;
            }
            if(crypto === "btc") {
                const bitcoin = await fetch(`https://api.coinmarketcap.com/v1/ticker/bitcoin/`);
                const bit = await bitcoin.json();
                convert = price / bit[0].price_usd;
            }
            if(crypto === "eth") {
                const ethereum = await fetch(`https://api.coinmarketcap.com/v1/ticker/ethereum/`);
                const eth = await ethereum.json();
                convert = price / eth[0].price_usd;
            }
                
            this.setState({
                convert: parseFloat(convert).toFixed(8)
            })        
        }
    }

    render() {
        if(!this.props.location.state) {
            return <Redirect to="/backoffice/package" />
        }
        else {
            return (
                <div className="l-order">
                    <div className="order max-content container">
                        <div className="order-header">
                            <h2 className="order-num">Orden: <span>#{ this.props.location.state.invoice.invoice.id }</span></h2>
                        </div>
                        <div className="order-grid">
                            <Sidebar invoice={this.props.location.state.invoice.invoice} />
                            <Payment country={ this.props.location.state.country } id={this.props.location.state.id} invoice={this.props.location.state.invoice.invoice} convert={this.state.convert} wallet={this.props.location.state.invoice.wallets} walycoin={this.props.location.state.wallet}/>
                        </div>
                    </div>
                    <Footer /> 
                </div>
            )
        }
        
    }
}

export default Order;