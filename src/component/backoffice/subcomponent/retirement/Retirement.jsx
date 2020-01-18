import React, { Component } from 'react';
import Card from './subcomponent/Card';
import Table from './subcomponent/Table';
import Footer from '../../../footer/Footer';
import requestApi from '../../../helpers/RequestApi';
import Form from './subcomponent/Form';
import Modal from './subcomponent/Modal';
import swal from 'sweetalert';

class Retirement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            retirement: '',
            isOpen: false,
            saldo: '',
            dashboard: '',
            total: '',
            transaction: ''
        }
        this.Ajax = new requestApi();
    }
    componentDidMount() {
        const url_saldo = `https://alycoinappweb.appspot.com/backoffice/get/totalavailable`;
        const url_dashboard = `https://alycoinappweb.appspot.com/backoffice/get/allinfo`;
        const url_total = `https://alycoinappweb.appspot.com/backoffice/get/paidout`;
        const url_transaction = `https://alycoinappweb.appspot.com/backoffice/get/pending/paidout`;

        const dashboardObject = {
            id: this.props.id
        }

        const transactionObject = {
            id: this.props.id,
            limit: 10
        }

        this.Ajax.requestApi(url_saldo, 'POST', dashboardObject)
            .then(response => {
                this.setState({
                    saldo: response.data
                })
            })
        this.Ajax.requestApi(url_dashboard, 'POST', dashboardObject)
            .then(response => {
                this.setState({
                    dashboard: response.data
                })
            })
        this.Ajax.requestApi(url_total, 'POST', dashboardObject)
            .then(response => {
                this.setState({
                    total: response.data
                })
            })
        this.Ajax.requestApi(url_transaction, 'POST', transactionObject)
            .then(response => {
                console.log(response)
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
        return (
            <div className="l-retirement">
                <div className="retirement max-content container margin-top">
                    <div className="retirement-header">
                        <h2 className="retirement-subtitle">Retiro</h2>
                    </div>
                    <div className="retirement-grid">
                        <Card title="Saldo habilitado" data={this.state.saldo.totalAvailable} description={<span onClick={(e) => this.setState({ isOpen: true})} className="retirement-click button-retirement">Retirar</span>} icon={<i className="fas fa-wallet"></i>} />
                        <Card title="Ganancias totales" data={ this.state.dashboard.totalGeneral } description="Tus ganancias." icon={<i className="fas fa-arrow-up"></i>} />
                        <Card title="Retiro total" data={this.state.total.totalpayout} description="Tus retiros." icon={<i className="fas fa-arrow-down"></i>} />
                        <div className="retirement-table">
                            <Table data={this.state.transaction}/>
                        </div>
                    </div>
                </div> 
                <Modal isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>
                    <h2 className="modal-title">Retiros</h2>
                    <Form history={this.props.history} id={this.props.id} wallet={this.props.wallet} /> 
                </Modal>
                <Footer />
            </div>
        )
    }
}  
export default Retirement;