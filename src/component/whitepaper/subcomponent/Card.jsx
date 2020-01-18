import React from 'react';

class Card extends React.Component {

    render() {
        return (
            <div className="page-team" itemScope itemType="http://schema.org/Person">
                <div className="page-team-img">
                    <img itemProp="image" src={this.props.img} alt={this.props.name}/>
                </div>
                <div className="page-team-content">
                    <h2 itemProp="givenName" className="page-team-name">{this.props.name}</h2>
                    <h3 itemProp="jobTitle" className="page-team-cargo">{this.props.cargo}</h3>
                    <div className="page-team-icon">
                        <a className="footer-icon" href={this.props.face}><i className="fab fa-facebook-f"></i></a>
                        <a className="footer-icon" href={this.props.twitter}><i className="fab fa-twitter"></i></a>
                        <a className="footer-icon" href={this.props.insta}><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;