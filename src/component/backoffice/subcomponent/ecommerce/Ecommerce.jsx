import React from 'react';
import logo from '../../../../assets/img/img-as.png';

class Ecommerce extends React.Component {
    render() {
        return (
            <div className="l-ecommerce">
                <div className="ecommerce max-content container">
                    <h2 className="ecommerce-title">Próxima</h2>
                    <p className="ecommerce-title">mente</p> 
                    <p className="ecommerce-description">¡Vamos a celebrar muy pronto el lanzamiento</p>
                    <p className="ecommerce-description">de nuestra tienda!</p>
                </div>
                <img src={logo} alt="AlyCoin Ecommerce"/>
            </div>
        )
    }
}

export default Ecommerce;