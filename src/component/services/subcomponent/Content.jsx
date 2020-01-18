import React from 'react';
import WOW from 'wowjs';

class Content extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }

    render() {
        return (
            <div className="services-card wow bounceIn">
                <div className="services-header">
                    <div className="services-image"><img src={ this.props.img } alt="AlyCoin Aplicaciones" /></div>
                    <p className="services-title">{ this.props.title }</p>
                </div>
                <div className="services-body">
                    <p className="services-description">{ this.props.description }</p>
                </div>
            </div> 
        )
    }
}

export default Content;