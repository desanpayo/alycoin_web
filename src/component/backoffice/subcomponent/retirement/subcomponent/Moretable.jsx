import React from 'react';
import RequestApi from '../../../../helpers/RequestApi';
import swal from 'sweetalert';

class Moretable extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            transaction: ''
        }
        this.Ajax = new RequestApi();
    }

    async componentDidMount() {
        const url = `https://alycoinappweb.appspot.com/backoffice/get/pending/paidout`;
        const transactionObject = {
            id: this.props.id,
            limit: 10
        }
        this.Ajax.requestApi(url, 'POST', transactionObject)
        .then(response => {
            if(response.status >= 200 && response.status < 300) {
                if(response.data.error === "user is not defined") {
                    return swal({
                                title: "Error",
                                text: "El id usuario no es valido",
                                icon: "error"
                            })
                }
                if(response.data.request) {
                    this.setState({
                        transaction: response.data.request
                    })
                }
                
            } else {
                const error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
        })
    }

    render() {
        const transaction = [...this.state.transaction];
        return (
            <div className="l-commission">
                <p className="commission-title">Informacion</p>
                <div className="table-content-alt">
                    <div className="table-container">
                        <table className="table">
                            <thead>
                                <tr>
                                <th>Usuario</th>
                                    <th>Moneda solicitada</th>
                                    <th>Monto</th>
                                    <th>Fecha inicial</th>
                                    <th>Fecha final</th>
                                    <th>Fecha de retiro</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    transaction.map(row => (
                                        <tr key={row.id}>
                                            <td>{row.nameuser}</td>
                                            <td>{row.coin_request}</td>
                                            <td>{row.coin_request_amount}</td>
                                            <td>{row.date_start_request}</td>
                                            <td>{row.date_end_request}</td>
                                            <td>{row.date_in}</td>
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

export default Moretable;