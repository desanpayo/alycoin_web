import React from 'react';
import { Link } from 'react-router-dom';
import AuthMethod from '../../helpers/Auth';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: false
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.Auth = new AuthMethod();
    }

    handleShow() {
        this.setState({
            isActive: !this.state.isActive
        })
    }
    handleLogout() {
        this.Auth.logout();
        this.props.history.replace("/login");
    }

    render() {
        const { isActive } = this.state;
        return (
            <div className="dropdown" onClick={ this.handleShow }>
                <div className="dropdown-title">{ this.props.user } <i className="fas fa-sort-down"></i></div>

                <ul className={`dropdown-list ${isActive ? 'show' : ''}`}>
                    <li className="dropdown-item"><Link className="dropdown-link" to={`/backoffice/edit`}><i className="fas fa-user-edit"></i> Editar cuenta</Link></li>
                    <li className="dropdown-item" onClick={ this.handleLogout }><i className="fas fa-sign-out-alt"></i> Cerrar sesion</li>
                </ul>
            </div>
        )
    }
}

export default Dropdown; 