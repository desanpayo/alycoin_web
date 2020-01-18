import React from 'react';
import bitcoin from '../../../assets/img/img-bitcoin-logo.png';
import litecoin from '../../../assets/img/img-litecoin-logo.png';
import ethereum from '../../../assets/img/img-ethereum-logo.png';
import dash from '../../../assets/img/img-dash-logo.png';
import Card from './Card';

class Response extends React.Component {

    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
    }

    handleShow() {
        let show;
        if(this.props.method === "btc") {
            show = (
               <Card img={bitcoin} wallet="19mVxVS3hKbC3XLgjRJg1MECgrHTFbCvhz"  /> 
            )
        }
        if(this.props.method === "ltc") {
            show = (
                <Card img={litecoin} wallet="LV3d99ezRjgempMEFP5APiK2adeAN5oY6P"/> 
             )
        }
        if(this.props.method === "dash") {  
            show = (
                <Card img={dash} wallet="Xh7okijhWNkQHKWHs8WaaXFkgoASnkdC5W" /> 
            )
        }
        if(this.props.method === "eth") {
            show = (
                <Card img={ethereum} wallet="0x735adb4ADf019915B578b6dEC2e99f09Fc352002"  /> 
            )
        }

        if(!this.props.method) return null;

        return (
            <div className="fundation-content">
                { show }
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.handleShow()
                }
            </React.Fragment>
        )
    }
}

export default Response;