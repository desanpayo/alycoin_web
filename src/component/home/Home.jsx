import React from 'react';

// import component
import Slider from '../slider/Slider';
import Main from '../main/Main';
import Question from '../questions/Question';
import Ecosystem from '../questions/Ecosystem';
import Carousel from '../carousel/Carousel';
import Video from '../video/Video';
import Particle from '../particles/Particle';
import Blockchain from '../blockchain/Blockchain';
import Pay from '../pay/Pay';
import Whitepaper from '../whitepaper/Whitepaper';
import Crypto from '../crypto/Crypto';
import Services from '../services/Services';
import Travel from '../travel/Travel';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

class Home extends React.Component {
    constructor (props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className="parent">
                <Slider />
                <div className="parallax">
                    <div className="parallax-slide"></div>
                    <Particle />
                </div>
                <Main />
                <Question />
                <Ecosystem />
                <Carousel />
                <Video />
                <Blockchain />
                <Crypto />
                <Whitepaper />
                <Services />
                <Travel />
                <Pay />
                <Contact />
                <Footer />

            </div>
        )
    }
}

export default Home;