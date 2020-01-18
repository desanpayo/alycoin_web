import React from 'react';
import logo from '../../../../../assets/img/img-logo-3.png';

class Card extends React.Component {
    render() {
        return (
            <article className={`package-card ${this.props.classActive}`}>
                <div className="package-head">
                    <img src={this.props.img} alt="Moneda AlyCoin"/>
                </div>
                <div className="package-body">
                    <h2 className="package-name">{this.props.name}</h2>
                    <div className="package-content">
                        <img src={logo} alt="Logo Alycoin"/>
                        <p className="package-price">{this.props.price}</p>
                    </div>
                </div>
                <div className="package-footer">
                    <button className="package-button" onClick={() => this.props.setActive(this.props.id)}>Seleccionar paquete <i className="fas fa-arrow-right"></i></button>
                </div>
            </article>
        )
    }
}

export default Card;