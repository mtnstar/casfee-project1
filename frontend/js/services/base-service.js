export class BaseService {
    constructor() {
        this.entries = [];
    }

    get backendUrl() {
        return 'http://localhost:3000';
    }

    request(method, path, data, headers) {
        const fetchHeaders = new Headers({'content-type': 'application/json'}, ...(headers || {}));
        const url = this.backendUrl + path;

        // TODO: add auth headers

        return fetch(url, {
            method: method,
            headers: fetchHeaders,
            body: JSON.stringify(data)
        }).then(res => {
            return res.json();
        });
    }
}
