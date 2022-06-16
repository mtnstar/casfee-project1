export class BaseService {
    constructor() {
        this.entries = [];
    }

    request(method, path, data, headers) {
        const fetchHeaders = new Headers({'content-type': 'application/json'}, ...(headers || {}));

        // TODO: add auth headers

        return fetch(path, {
            method: method,
            headers: fetchHeaders,
            body: JSON.stringify(data)
        }).then(res => {
            return res.json();
        });
    }
}
