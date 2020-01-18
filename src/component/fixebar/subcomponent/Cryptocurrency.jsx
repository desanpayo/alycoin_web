import React from 'react';

const Cryptocurrency = (props) => {

    let icon;
    if(props.change > 0) {
        icon = <i className="fas fa-arrow-up"></i>
    } else if (props.change === '') {
        icon = <i className="success fas fa-arrow-up"></i>
    }else { 
        icon = <i className="fas fa-arrow-down"></i>
    }
    return (
        <article className="fixebar-content">
            <div className="fixebar-logo">
                <img src={props.img} alt={props.name}/>
            </div>
            <h2 className="fixebar-title">{props.name}</h2>
            <h3 className="fixebar-symbol">({props.symbol})</h3>
            <h4 className="fixebar-price">${props.price}</h4>
            <h5 className={`fixebar-change ${props.change > 0 ? 'success' : 'danger'}`}>
                {props.change}{icon}
            </h5>
        </article>
    )
}

export default Cryptocurrency;