import React from 'react';
import RequestApi from '../../../../helpers/RequestApi';

class Directmore extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            commissions: '',
        }
        this.Ajax = new RequestApi();
    }

    async componentDidMount() {
        const url = `https://alycoinappweb.appspot.com/backoffice/commissions/direct`;
        const commission = {
            id: this.props.id,
        }
        const response = await this.Ajax.requestApi(url, 'POST', commission);
        this.setState({
            commissions: response.data
        }) 
    }

    render() {
        const commissions = [...this.state.commissions];
        return (
            <div className="l-commission">
                <p className="commission-title">COMISIONES DIRECTAS</p>
                <div className="table-content-alt">
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
                                    commissions.map(row => (
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

export default Directmore;