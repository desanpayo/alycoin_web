import React from 'react';
import { Link } from 'react-router-dom';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
    }

    handleShow(e) {
        if(this.props.data.length === 0) {
            return (
                <div className="table-content margin-top">
                    <h2 className="table-title">Ultimas ganancias nivel 2</h2>
                    <div className="padding">
                        <h3 className="table-none">No hay ganancias que mostrar</h3>
                    </div>
                </div>
            )
        }
        if(this.props.data) {
            const commissions = [...this.props.data];
            return (
                <div className="table-alt-content margin-top">
                    <h2 className="table-alt-title">Ultimas ganancias nivel 2</h2>
                    <div className="table-alt-container">
                        <table className="table-alt">
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
                                        <tr  key={row.id}>
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
                    <Link to="/backoffice/level2" className="table-showmore"> Mostrar mas <i className="fas fa-sort-down"></i></Link>
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