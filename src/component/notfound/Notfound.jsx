import React from 'react';
import notfound from '../../assets/img/img-404.png';
import Particle from '../particles/Particle';

const Notfound = () => {
    return (
        <div className="l-notfound">
            <div className="notfound">
                <img  src={notfound} alt="Not Found AlyCoin"/>
                <a className="notfound-button" href="/">Regresar al inicio</a>       
                <Particle />
            </div>
        </div>
    )
}

export default Notfound;