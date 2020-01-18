import React from 'react';
import WOW from 'wowjs';
import dash from '../../../assets/img/img-dash-logo.png';
import litecoin from '../../../assets/img/img-litecoin-logo.png';
import ethereum from '../../../assets/img/img-ethereum-logo.png';
import bitcoin from '../../../assets/img/img-bitcoin-logo.png';
import alycoin from '../../../assets/img/img-logo-1.png';

class CardApi extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }  
    render() {
        return (
            <article className="crypto-card wow bounceIn">
                <div className="crypto-logo">
                    <a rel="noopener" href="https://coinmarketcap.com">
                        {this.props.name === 'Dash' ? <img src={dash} alt="dash"/> : ''}
                        {this.props.name === 'Litecoin' ? <img src={litecoin} alt="litecoin" /> : ''}
                        {this.props.name === 'Ethereum' ? <img src={ethereum} alt="ethereum" /> : ''}
                        {this.props.name === 'Bitcoin' ? <img className="crypto-bitcoin" src={bitcoin} alt="bitcoin" /> : ''}
                        {this.props.name === 'AlyCoin' ? <img className="crypto-bitcoin" src={alycoin} alt="alycoin" /> : ''}
                    </a>
                </div>
                    <p className="crypto-name">{this.props.name}</p>
                    {
                        this.props.name === "AlyCoin" ? <p className="crypto-price green">{`$${this.props.price_usd}`}</p> : <p className="crypto-price">{`$${this.props.price_usd}`}</p>
                    }
                    <p className={`crypto-data ${this.props.percent_change_1h > 0 ? 'success' : 'danger'}`}>{this.props.percent_change_1h}</p>
            </article>
        )
    }
}

export default CardApi;