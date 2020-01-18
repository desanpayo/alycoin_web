import React from 'react';
import RequestApi from '../../../../../helpers/RequestApi';

class Level3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            level3: ''
        }
        this.Ajax = new RequestApi();
    }

    async componentDidMount() {
        const url = `https://alycoinappweb.appspot.com/backoffice/commissions/level3`;
        
        const level = {
            id: this.props.id,
        }

        const response1 = await this.Ajax.requestApi(url, 'POST', level);
        
        this.setState({ 
            level3: response1.data,
        }) 
    }

    render() {
        const level3 = [...this.state.level3];
            return (
                <div className="l-commission margin-top">
                    <p className="commission-title">COMISIONES NIVEL 3</p>
                    <div className="table-content-alt container">
                        <div className="table-container">
                            <table className="table">
                                <thead>
                                    <tr> 
                                        <th>Nombre de usuario</th>
                                        <th>País</th>
                                        <th>Fecha</th> 
                                        <th>Comisiones (BTC)</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        level3.map(row => (
                                            <tr key={row.id}>
                                                <td>{row.name_referral}</td>
                                                <td>{row.country_referral}</td>
                                                <td>{row.date_in}</td>
                                                <td>{row.commissionsbtc}</td>
                                                <td className={`${row.paidout ? 'true' : 'false'}`}>{row.paidout ? 'Pagado' : 'Pendiente'}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
    } 
}

export default Level3;