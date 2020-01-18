import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import styles scss
import '../assets/scss/styles.scss';

// import component
import Home from './home/Home';
import Backoffice from './backoffice/Backoffice';
import Alyshopping from './shopping/Alyshopping';

// import images
import moneda from '../assets/img/img-moneda-5.png';

// import component
import Login from './login/Login';
import Preloader from './preloader/Preloader';
import Notfound from './notfound/Notfound';
import Condition from './conditions/Condition';
import Reset from './reset/Reset';
import Register from './register/Register';
import Alywallet from './wallet/Alywallet';
import Alyskiper from './skiper/Alyskiper';
import Alysocial from './social/Alysocial';
import Cupon from './cupon/Cupon';
import Resetpassword from './reset/Resetpassword';
import Page from './whitepaper/Page';
import Alypay from './alypay/Alypay';
import Alyexecutive from './executive/Alyexecutive';
import Alyfundation from './fundation/AlyFundation';

class Alycoin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
            isAuth: false, 
            loading: false,
        }
        this.handleToggleOn = this.handleToggleOn.bind(this);
    }

    handleToggleOn() {
        this.setState({isToggleOn: !this.state.isToggleOn})
    }
    
    render() {
        const { isToggleOn } = this.state;
        return (
            <React.Fragment>
                <Preloader
                    color={'#ccc'}
                    bgColor={'#000'} 
                    time={1400} 
                />
        
                <Router>
                    <div>
                        <header className={`l-header`}>
                            <div className="navbar-main container max-content">
                                <div className="navbar-brand">
                                    <Link to="/backoffice/package"><img className="navbar-image slidetop" src={moneda} alt="Moneda AlyCoin"/></Link>
                                    <h2 className="navbar-title slidetop">Aly<span>Coin</span></h2>
                                </div>

                                <div className="navbar-toggle slideright" onClick={this.handleToggleOn}>
                                    <i className="fas fa-bars"></i>
                                </div>

                                <nav className={`navbar-content ${isToggleOn ? 'open-navbar' : ''}`}>
                                    <ul className="navbar-list">
                                        <li className="navbar-item slidetop"><Link onClick={this.handleToggleOn} className="navbar-link" to="/">Inicio</Link></li>
                                        <li className="navbar-item slidetop"><Link onClick={this.handleToggleOn} className="navbar-link" to="/alyexecutive">AlyExecutive</Link></li>
                                        <li className="navbar-item slidetop"><Link onClick={this.handleToggleOn} className="navbar-link" to="/alywallet">AlyWallet</Link></li>
                                        <li className="navbar-item slidetop"><Link onClick={this.handleToggleOn} className="navbar-link" to="/alyshopping">AlyShopping</Link></li>
                                        <li className="navbar-item slidetop"><Link onClick={this.handleToggleOn} className="navbar-link" to="/alyskiper">AlySkiper</Link></li>
                                        <li className="navbar-item slidetop"><Link onClick={this.handleToggleOn} className="navbar-link" to="/alypay">AlyPay</Link></li>
                                        <li className="navbar-item slidetop"><Link onClick={this.handleToggleOn} className="navbar-link" to="/cupon">CupON</Link></li>
                                        <li className="navbar-item slidetop"><Link onClick={this.handleToggleOn} className="navbar-link" to="/alyfundation">AlyFoundation</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </header>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/backoffice" component={Backoffice} />
                            <Route path="/alyshopping" component={Alyshopping} />
                            <Route path="/alywallet" component={Alywallet} />
                            <Route path="/alyskiper" component={Alyskiper} />
                            <Route path="/alysocial" component={Alysocial} />
                            <Route path="/alypay" component={Alypay} />
                            <Route path="/alyfundation" component={Alyfundation} />
                            <Route path="/alyexecutive" component={Alyexecutive} />
                            <Route path="/knowmore" component={Page} />
                            <Route path="/cupon" component={Cupon} />
                            <Route path="/login/:token?" component={Login} />
                            <Route path="/register/:id?/:reffer?" component={Register} />
                            <Route path="/term" component={Condition} />
                            <Route path="/password/reset/:token" component={Resetpassword} />
                            <Route path="/reset" component={Reset} />
                            <Route component={Notfound} />
                        </Switch>
                    </div>
                </Router>
            </React.Fragment> 
        )
    }
}

export default Alycoin; 

