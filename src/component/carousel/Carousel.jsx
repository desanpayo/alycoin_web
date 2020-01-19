import React from 'react';

// import images
import app_1 from '../../assets/img/img-app-1.jpeg';
import app_2 from '../../assets/img/img-app-2.jpeg';
import app_3 from '../../assets/img/img-app-3.jpeg';
import app_4 from '../../assets/img/img-app-4.jpeg';
import app_5 from '../../assets/img/img-app-5.png';
import app_6 from '../../assets/img/img-app-6.png';
import app_7 from '../../assets/img/img-app-7.png';
import WOW from 'wowjs';

class Carousel extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <div className="l-carousel margin-top">
                <h2 className="carousel-title wow fadeInRight">Próximamente</h2>
                <div className="carousel">
                    <div className="carousel-content">
                        <figure className="carousel-images">
                            <img className="carousel-img" src={app_1} alt="AlyCoin proximamente"/>
                        </figure>
                        <figure className="carousel-images">
                            <img className="carousel-img" src={app_2} alt="AlyCoin proximamente"/>
                        </figure>
                        <figure className="carousel-images">
                            <img className="carousel-img" src={app_3} alt="AlyCoin proximamente"/>
                        </figure>
                        <figure className="carousel-images">
                            <img className="carousel-img" src={app_4} alt="AlyCoin proximamente"/>
                        </figure>
                        <figure className="carousel-images">
                            <img className="carousel-img" src={app_5} alt="AlyCoin proximamente"/>
                        </figure>
                        <figure className="carousel-images">
                            <img className="carousel-img" src={app_6} alt="AlyCoin proximamente"/>
                        </figure>
                        <figure className="carousel-images">
                            <img className="carousel-img" src={app_7} alt="AlyCoin proximamente"/>
                        </figure>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Carousel;