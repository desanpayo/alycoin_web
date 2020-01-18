import React from 'react';
import AuthMethod from './Auth';

export default function withAuth(AuthComponent) {
    const Auth = new AuthMethod();

    return class AuthWrapped extends React.Component {
        state = {
            confirm: null,
            loaded: false
        }

        componentDidMount() {
            if(!Auth.loggedIn()) {
                this.props.history.replace("/login");
            } else {
                try {
                    const confirm = Auth.getConfirm();
                    this.setState({
                        confirm: confirm,
                        loaded: true
                    })
                } catch(err) {
                    Auth.logout();
                    this.props.history.replace("/login");
                }
            }
        }
        render() {
            if(this.state.loaded === true) {
                if(this.state.confirm) {
                    return (
                        <AuthComponent 
                            history={this.props.history}
                            confirm={this.state.confirm}
                        />
                    )
                } else {
                    return null;
                }
            } else {
                return null;
            }
        }
    }
}