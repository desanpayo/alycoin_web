import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

// import component
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Package from './subcomponent/package/Package';
import Retirement from './subcomponent/retirement/Retirement';
import Dashboard from './subcomponent/dashboard/Dashboard';
import Ecommerce from './subcomponent/ecommerce/Ecommerce';
import Office from './subcomponent/office/Ofiice';
import Particle from '../particles/Particle';
import withAuth from '../helpers/withAuth';
import Dropdown from '../navbar/subcomponent/Dropdown';
import Edit from './subcomponent/edit/Edit';
import Order from './subcomponent/orders/Order';
import Notfound from '../notfound/Notfound';
import Directmore from './subcomponent/office/direct/Directmore';
import Level1 from './subcomponent/dashboard/subcomponent/level-1/Level1';
import Level2 from './subcomponent/dashboard/subcomponent/level-2/Level2';
import Level3 from './subcomponent/dashboard/subcomponent/level-3/Level3';
import Level4 from './subcomponent/dashboard/subcomponent/level-4/Level4';
import Admin from './subcomponent/admin/Admin';
import Moretable from './subcomponent/retirement/subcomponent/Moretable';

class Backoffice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isToggleOn: false,
            loading: false,
            isAdmin: false,
        }
        this.handleToggleOn = this.handleToggleOn.bind(this);
    }

    handleToggleOn() {
        this.setState({isToggleOn: !this.state.isToggleOn})
    }
 
    componentDidMount() {
        this.setState({loading: true})
        if(this.props.confirm.admin) {
            this.setState({
                isAdmin: true
            })
        }
    }
    
    render() {
        const { isToggleOn } = this.state;
        return (
            <Router>
                <div>
                    <div className="l-navigation">
                        <div className="navigation max-content container">
                            <div className="navigation-toggle" onClick={this.handleToggleOn}>
                                <i className="fas fa-bars"></i>
                            </div>
                            
                            <ul className={`navigation-list ${isToggleOn ? 'open-navigation' : ''}`}>
                                <li className="navigation-item"><Link onClick={this.handleToggleOn} className="navigation-link" to={`/backoffice`}>Backoffice</Link></li>
                                <li className="navigation-item"><Link onClick={this.handleToggleOn} className="navigation-link" to={`/backoffice/package`}>AlyCoin</Link></li>
                                <li className="navigation-item"><Link onClick={this.handleToggleOn} className="navigation-link" to={`/backoffice/retirement`}>Retiros</Link></li>
                                <li className="navigation-item"><Link onClick={this.handleToggleOn} className="navigation-link" to={`/backoffice/dashboard`}>Dashboard</Link></li>
                                <li className="navigation-item"><Link onClick={this.handleToggleOn} className="navigation-link" to={`/backoffice/ecommerce`}>Ecommerce</Link></li>
                                {
                                    this.state.isAdmin ? (
                                        <li className="navigation-item"><Link onClick={this.handleToggleOn} className="navigation-link" to={`/backoffice/private/admin`}>Admin</Link></li>
                                    )
                                    : ''
                                }
                            </ul>
                            <Dropdown user={this.props.confirm.user} history={this.props.history}/>
                        </div>
                    </div>
                    <div className="parallax">
                        <div className="parallax-slide"></div>
                        <Particle /> 
                    </div>
                    <Switch>
                        <Route exact path="/backoffice" render={(props) => <Office user={this.props.confirm} /> } />
                        <Route path="/backoffice/package"  render={(props) => <Package country={this.props.confirm.country} id={this.props.confirm.id} wallet={this.props.confirm.userwallet.walycoin ? this.props.confirm.userwallet.walycoin : ''} history={this.props.history}/> } />
                        <Route path="/backoffice/orders" component={Order}/>
                        <Route path="/backoffice/retirement" render={(props) => <Retirement history={this.props.history} id={this.props.confirm.id} wallet={this.props.confirm.userwallet} />} />
                        <Route path="/backoffice/dashboard" render={(props) => <Dashboard id={this.props.confirm.id} /> } />
                        <Route path="/backoffice/ecommerce" component={Ecommerce} />
                        <Route path="/backoffice/edit" render={(props) => <Edit user={this.props.confirm} history={this.props.history} />} />
                        <Route path="/backoffice/directmore" render={(props) => <Directmore id={this.props.confirm.id} />}/>
                        <Route path="/backoffice/moretable" render={(props) => <Moretable id={this.props.confirm.id} />}/>
                        <Route path="/backoffice/level1" render={(props) => <Level1 id={this.props.confirm.id} />}/>
                        <Route path="/backoffice/level2" render={(props) => <Level2 id={this.props.confirm.id} />}/>
                        <Route path="/backoffice/level3" render={(props) => <Level3 id={this.props.confirm.id} />}/>
                        <Route path="/backoffice/level4" render={(props) => <Level4 id={this.props.confirm.id} />}/>
                        <Route path="/backoffice/private/admin" render={(props) => <Admin user={this.props.confirm} history={this.props.history} />}/>
                        <Route component={Notfound} />
                    </Switch> 
                </div> 
            </Router>
        )
    }
}


export default withAuth(Backoffice);