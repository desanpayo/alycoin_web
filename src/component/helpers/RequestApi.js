import axios from 'axios';

class RequestApi {
    requestApi = (url, method, requestApi) => {
        const headers = {
            Accept: 'application/json',
            "Content-Type": "application/json"
        }
        if(requestApi) {
            return axios({
                url,
                method,
                data: requestApi,
                headers
            })
                .then(response => response)
        }else {
            return axios({
                url,
                method,
                headers
            })
                .then(response => response)
        }
        
    }
}

export default RequestApi;