import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import QRCode from 'qrcode.react';

const Card = (props) => {
    const value = props.wallet;
    return (
        <div className="fundation-item">
            <div className="fundation-head">
                <img src={props.img} alt=""/>
            </div>
            <div className="fundation-body">
                <div className="fundation-qr">
                    <QRCode value={ value } />
                </div>
                <p className="fundation-wallet">{ props.wallet }</p>
            </div>
            <CopyToClipboard text={value}>
                <button className="fundation-button">
                    <i className="fas fa-copy"></i>
                </button>
            </CopyToClipboard> 
        </div>
    )
}

export default Card;