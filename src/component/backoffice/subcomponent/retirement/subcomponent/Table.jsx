import React from 'react';
import { Link } from 'react-router-dom';

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        this.handleShow = this.handleShow.bind(this);
    }

    handleShow(e) {
        if(this.props.data.length === 0) {
            return (
                <div className="table-content">
                    <h2 className="table-title">Información</h2>
                    <div className="padding">
                        <h2 className="table-none">No hay retiros que mostrar</h2>
                    </div>
                </div>
            )
        } 
        if(this.props.data) {
            return (
                <div className="table-content">
                    <h2 className="table-title">Información</h2>

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
                                    this.props.data.map(row => (
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
                    <Link to="/backoffice/moretable" className="table-showmore"> Mostrar mas <i className="fas fa-sort-down"></i></Link>
                </div>
            )
        }
    }

    render() {
        return (
           <React.Fragment>
               {
                   this.handleShow()
               }
           </React.Fragment>
        )
    } 
}

export default Table;