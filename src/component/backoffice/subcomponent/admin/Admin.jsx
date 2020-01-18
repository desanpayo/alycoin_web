import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Table from './Tabla';
import RequestApi from '../../../helpers/RequestApi';
import swal from 'sweetalert';

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            data: '',
        }
        this.Ajax = new RequestApi();
    }

    componentWillMount() {
        if(!this.props.user.admin) {
            this.setState({
                redirect: true,
            })
        }
    }

    componentDidMount() {
        const url = `https://alycoinappweb.appspot.com/backoffice/panel/admin/notificationsales`;
        const objectAdmin = {
            id: this.props.user.id
        }
        this.Ajax.requestApi(url,'POST', objectAdmin)
            .then(response => {
                if(response.status >=200 && response.status < 300) {
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
                    if(response.data.all) {
                        this.setState({
                            data: response.data
                        })
                    }
                }
            })
    }

    render() {
        return (
            <div className="l-admin">
                <div className="admin container max-content">
                    <Table history={this.props.history} data={ this.state.data } id={this.props.user.id} />
                </div>
                { 
                    this.state.redirect ? <Redirect to={'/backoffice'} /> : ''
                }
            </div>
        )
    }
}

export default Admin;