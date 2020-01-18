import React from 'react';
import bgmain from '../../../../../assets/img/img-backoffice.png';
import Particle from '../../../../particles/Particle';
import Fixebar from '../../../../fixebar/Fixebar';

class Main extends React.Component {
    render() {
        return (
            <div className="main-back">
                <div className="main-back-img">
                    <Particle />
                    <img src={ bgmain } alt="Backoffice AlyCoin"/>
                </div>
                <Fixebar />
            </div>
        )
    }
}

export default Main;