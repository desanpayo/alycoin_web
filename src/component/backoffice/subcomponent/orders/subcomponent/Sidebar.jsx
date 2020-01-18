import React from 'react';
import Countdown from "react-countdown-now";
import Timer from './Timer';
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        swal({
            title: "¿Estás seguro que deseas cancelar la orden?",
            text: "Una vez cancelada, tendra que generar una nueva orden.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Su orden ha sido cancelada.", {
                icon: "error",
              });
              this.setState({
                  redirect: true
              })
            }
          });
    }

    render() { 
        return (
            <aside className="order-sidebar">
                <div className="order-head">
                    <h2 className="order-title">Factura</h2>
                </div>
                <div className="order-body">
                    <p className="order-info">No. Factura: <span>{ this.props.invoice.id }</span></p>
                    <p className="order-info">Estado: <span>{ this.props.invoice.state ? 'Completado' : 'Pendiente' }</span></p>
                    <p className="order-info">Nombre de usuario: <span>{ this.props.invoice.name_user }</span></p>
                    <p className="order-info">Moneda: <span className="order-aly">AlyCoin</span></p>
                    <p className="order-info">Forma de pago: <span>{ this.props.invoice.waytopay }</span></p>
                    <p className="order-info">Tiempo de vencimiento <Countdown date={Date.now() + 900000} renderer={Timer} /></p>
                    <div className="order-content">
                        <h2 className="order-package">Paquete <span className="order-data">{ this.props.invoice.name_package }</span></h2>
                        <h3 className="order-package">Precio <span className="order-data">${ this.props.invoice.price }</span></h3>
                        <h4 className="order-package">Monedas <span className="order-data">{ this.props.invoice.package_amount }</span></h4>
                    </div>
                    <p className="order-total">Total: <span>${ this.props.invoice.price }</span></p>
                </div>
                <div className="order-footer">
                    <button className="order-button-cancel" onClick={ this.handleOnClick }>Cancelar Factura</button>
                </div>
                {
                    this.state.redirect ? <Redirect to={{
                        pathname: `/backoffice/package`,
                    }} /> : ''
                }
            </aside>
        )
    }
}

export default Sidebar;