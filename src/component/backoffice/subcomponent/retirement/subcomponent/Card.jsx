import React, { Component } from 'react';
import aly from '../../../../../assets/img/img-logo-3.png';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <article className="retirement-card">
                <div className="retirement-icon">{ this.props.icon }</div>
                <div className="retirement-content">
                    <p className="retirement-title">{ this.props.title }</p>
                    <div className="retirement-main">
                        <div className="retirement-img"><img src={aly} alt="Logo Aly"/></div>
                        <p className="retirement-data">{this.props.data}</p>
                    </div>
                    <p className="retirement-description">{this.props.description}</p>
                </div>
            </article>
        )
    }
}

export default Card;