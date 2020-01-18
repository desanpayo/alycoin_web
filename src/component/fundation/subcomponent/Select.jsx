import React from 'react';
import Response from './Response';

class Select extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            method: '',
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="select">
                <div className={`alyfundation-group`}>
                    <select className="alyfundation-select" name="method" id="method" onChange={ this.handleOnChange }>
                        <option value="" disabled defaultValue>Selecciona el metodo de pago</option>
                        <option value="btc">Bitcoin</option>
                        <option value="ltc">Litecoin</option>
                        <option value="dash">Dash</option>
                        <option value="eth">Ethereum</option>
                    </select>
                    <label className="alyfundation-label" htmlFor="method">Metodo de pago</label>
                </div>
                <Response method={this.state.method} />
            </div>
        )
    }
}

export default Select;