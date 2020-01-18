import React from 'react';
import Table1 from './subcomponent/level-1/Table_1';
import Table2 from './subcomponent/level-2/Table_2';
import Table3 from './subcomponent/level-3/Table_3';
import Table4 from './subcomponent/level-4/Table_4';
import Footer from '../../../footer/Footer';
import requestApi from '../../../helpers/RequestApi';
import img from '../../../../assets/img/img-logo-1.png';

class Dashboard extends React.Component { 

    constructor(props) {
        super(props);

        this.state = {
            level1: '',
            level2: '',
            level3: '',
            level4: '',
            dashboard: '',
            saldo: ''
        }
        this.Ajax = new requestApi();
    }

    async componentDidMount() {
        const url = `https://alycoinappweb.appspot.com/backoffice/commissions/level1`;
        const url2 = `https://alycoinappweb.appspot.com/backoffice/commissions/level2`;
        const url3 = `https://alycoinappweb.appspot.com/backoffice/commissions/level3`;
        const url4 = `https://alycoinappweb.appspot.com/backoffice/commissions/level4`;
        
        const level = {
            id: this.props.id,
            limit: 10
        }

        const response1 = await this.Ajax.requestApi(url, 'POST', level);
        const response2 = await this.Ajax.requestApi(url2, 'POST', level);
        const response3 = await this.Ajax.requestApi(url3, 'POST', level);
        const response4 = await this.Ajax.requestApi(url4, 'POST', level);
        
        const url_dashboard = `https://alycoinappweb.appspot.com/backoffice/get/allinfo`;
        const url_saldo = `https://alycoinappweb.appspot.com/backoffice/get/totalavailable`;
        const dashboardObject = {
            id: this.props.id 
        }

        this.Ajax.requestApi(url_dashboard, 'POST', dashboardObject)
            .then(response => {
                this.setState({
                    dashboard: response.data
                })
            })
        this.Ajax.requestApi(url_saldo, 'POST', dashboardObject)
            .then(response => {
                this.setState({
                    saldo: response.data
                })
            })

        this.setState({ 
            level1: response1.data,
            level2: response2.data,
            level3: response3.data,
            level4: response4.data
        }) 
    }

    render() {
        return (
            <div className="l-dashboard margin-top">
                <div className="dashboard max-content container">
                    <div className="dashboard-header">
                        <h2 className="dashboard-subtitle">Dashboard</h2>
                    </div>

                    <section className="dashboard-main">
                        <div className="dashboard-main-header">
                            <h2 className="dashboard-title">Informe <span>AlyCoin</span></h2>
                        </div>
                        <div className="dashboard-main-body">
                            <div className="dashboard-main-img">
                                <img src={this.state.dashboard.image ? this.state.dashboard.image : img} alt="Paquete AlyCoin"/>
                            </div>
                            <div className="dashboard-container">
                                <p className="dashboard-main-text">Plan <span className="dashboard-main-text-span-1">{ this.state.dashboard.name_package }</span></p>
								<span className="dashboard-alt"><span className="dashboard-main-text-span-1-alt">Aly </span>{this.state.dashboard.alycoin_amount}</span>
                                <span className="dashboard-alt">${this.state.dashboard.amount_usd}</span>
                            </div>
                            <p className="dashboard-main-text">Ganancias de red <span className="dashboard-main-text-span">{ this.state.dashboard.totalRed }</span></p>
                            <p className="dashboard-main-text">Ganancias directas <span className="dashboard-main-text-span">{ this.state.dashboard.totaldirects }</span></p>
                            <p className="dashboard-main-text">Saldo habilitado <span className="dashboard-main-text-span">{ this.state.saldo.totalAvailable }</span></p>
                            <p className="dashboard-main-text">Total <span className="dashboard-main-text-span">{ this.state.dashboard.totalGeneral }</span></p>
                        
                        </div>
                    </section>
                    <Table1 data={this.state.level1} />
                    <Table2 data={this.state.level2} />
                    <Table3 data={this.state.level3} />
                    <Table4 data={this.state.level4} />
                </div>
                <Footer />
            </div> 
        ) 
    }
}

export default Dashboard;