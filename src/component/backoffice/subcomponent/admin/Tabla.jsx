import React from 'react';
import swal from 'sweetalert';
import RequestApi from '../../../helpers/RequestApi';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.Ajax = new RequestApi();
        this.clickRef = React.createRef();

        this.state = {
            id: '',
        }
    }


    handleOnClick() {
        swal({
            title: "¿Estás seguro de realizar la siguiente accion?",
            text: "Una vez aceptado no se podra restablecer y se confirmara el desposito.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                const url = `https://alycoinappweb.appspot.com/backoffice/panel/admin/notificationsales/sendok`;
                const objectTable = {
                    id: this.props.id,
                    iduser: this.clickRef.current.id
                }
                
                this.Ajax.requestApi(url,'POST', objectTable)
                    .then(response => {
                        if(response.status >= 200 && response.status < 300) {
                            if(response.data.error === "bad request") {
                                swal({
                                    title: "Error",
                                    text: "No se ha podido cargar los datos.",
                                    icon: "error"
                                })
                            }
                            if(response.data.error === "you are not admin") {
                                swal({
                                    title: "Error",
                                    text: "No se puede realizar la accion, no eres administrador.",
                                    icon: "error"
                                })
                            }
                            if(response.data.success === "successfully") {
                                swal({
                                    text: "Se realizo correctamente.",
                                    icon: "success",
                                })
                                this.props.history.replace("/backoffice/private/admin");
                            }
                        }
                    }) 
            }
          });
    }

    handleShow(e) {
        if(this.props.data.length === 0) {
            return (
                <div className="table-alt-content margin-top">
                    <h2 className="table-alt-title">Notificaciones de pagos</h2>
                    <div className="padding">
                        <h3 className="table-alt-none">No hay nada que mostrar</h3>
                    </div>
                </div>
            )
        }  
        if(this.props.data) {
            const pagos = [...this.props.data.all];
            return (
                <div className="table-alt-content margin-top">
                    <h2 className="table-alt-title">Notificaciones de pagos</h2>
                    <div className="table-alt-container">
                        <table className="table-alt">
                            <thead>
                                <tr>
                                    <th>Nombre usuario</th>
                                    <th>Paquete</th> 
                                    <th>Precio</th>
                                    <th>Alycoin</th>
                                    <th>Coin</th>
                                    <th>Wallet</th>
                                    <th>Validar pago</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    pagos.map(row => (
                                        <tr key={row.id}>
                                            <td>{row.nameuser}</td>
                                            <td>{row.package_id}</td>
                                            <td>{row.package_amount}</td>
                                            <td>{row.alycoin_amount}</td>
                                            <td>{row.coin}</td>
                                            <td>{row.walycoin}</td>
                                            <td><span ref={this.clickRef} id={row.iduser} onClick={this.handleOnClick} className="admin-button">Pagar</span></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
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