import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class Reffer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    render() {
        let value = `https://alycoin.net/register/${this.props.id}/${this.props.name}`;
        return (
            <div className="reffer margin-top">
                <h2 className="reffer-title">Enlace de referencia</h2>
                <p className="reffer-description">Invita a tus amigos y gana dinero con referidos.</p>
                <div className="reffer-content">
                    <input className="reffer-input" id="reffer" type="text" disabled value={`${value}`} placeholder="Enlace de referido" />
                    <CopyToClipboard text={value}>
                        <button className="reffer-button" > Copiar
                            <i className="fas fa-copy"></i>
                        </button>
                    </CopyToClipboard>
                </div>
                <div className="reffer-img"></div>
            </div>
        )
    }
}

export default Reffer;