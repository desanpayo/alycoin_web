import decode from 'jwt-decode';

export default class Auth {

    loggedIn = () => {
        const token = this.getToken();
        return !!token && !this.isTokenExpeired(token);
    }

    isTokenExpeired = token => {
        try {
            const decoded = decode(token);
            if(decoded.exp < Date.now() / 1000) {
                return true;
            }else {
                return false;
            }
        } catch(err) {
            return false;
        }
    }

    setToken = token => {
        localStorage.setItem('token', token);
    }

    getToken = () => {
        return localStorage.getItem('token');
    }

    logout = () => {
        localStorage.removeItem('token');
    }

    getConfirm = () => {
        let answer = decode(this.getToken());
        return answer;
    }
}
