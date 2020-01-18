import React from 'react';
import WOW from 'wowjs';
import Form from './subcomponent/Form';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }

    render() {
        return (
            <section className="l-contact">
                <h2 className="contact-title wow fadeInLeftBig">Contacto</h2>
                <div className="contact max-content container">
                    <Form />
                </div>
            </section>
        )
    }
}

export default Contact;