export class BaseService {

    request(method, path, data) {
        const fetchHeaders = new Headers({'content-type': 'application/json'});

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
