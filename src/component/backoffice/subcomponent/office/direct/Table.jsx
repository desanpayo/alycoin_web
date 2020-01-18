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
                <div className="table-content margin-top">
                    <h2 className="table-title">Comisiones directas</h2>
                    <div className="padding">
                        <h2 className="table-none">No hay comisiones directas que mostrar</h2>
                    </div>
                </div>
            ) 
        }
        if(this.props.data) { 
            const commissions = [...this.props.data];
            return (
                <div className="table-content margin-top">
                    <h2 className="table-title">Comisiones directas</h2>

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
                    <Link to="/backoffice/directmore" className="table-showmore"> Mostrar mas <i className="fas fa-sort-down"></i></Link>
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