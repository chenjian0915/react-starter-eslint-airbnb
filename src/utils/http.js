import axios from 'axios';
import config from '../shared/config';
import history from '../shared/history';
import serverList from '../services/serverList';
import sessionService from '../services/session.service';

console.log('serverList', serverList);

class HttpClient {
    constructor() {
        const httpClient = axios.create({
            baseURL: config.api.url_prefix
        });
        // const configCopy = { ...config };
        httpClient.interceptors.request.use(
            configCopy => {
                const user = sessionService.getUser();
                const token = user ? user.token : null;
                if (token) {
                    configCopy.headers.Authorization = `Bearer ${token}`;
                } else {
                    sessionService.logout();
                }
                return configCopy;
            },
            error => Promise.reject(error)
        );

        httpClient.interceptors.response.use(
            res => {
                const token = res.headers.authorization.split(' ')[1];
                sessionService.updateToken(token);

                return res;
            },
            err => {
                const error = err.response;
                if (
                    error.status === 401 &&
                    error.config &&
                    !error.config.__isRetryRequest
                ) {
                }
                return Promise.reject(error);
            }
        );

        this.httpClient = httpClient;
    }

    // GET
    get(url, params) {
        this.httpClient({
            method: 'get',
            url,
            params
        })
            .then(res => {
                // eslint-disable-next-line no-undef
                resolve(res); // resolve在promise执行器内部
            })
            .catch(err => {
                console.log(err, '异常');
            });
    }

    // POST
    post(url, data, options) {
        this.httpClient
            .post(url, data, options)
            .then(this.onSuccess)
            .catch(this.onError);
    }

    // PUT
    put(url, data, options) {
        this.httpClient
            .post(url, data, options)
            .then(this.onSuccess)
            .catch(this.onError);
    }

    // PATCH
    patch(url, data, options) {
        this.httpClient
            .patch(url, data, options)
            .then(this.onSuccess)
            .catch(this.onError);
    }

    // DELETE
    delete(url, options) {
        this.httpClient
            .delete(url, options)
            .then(this.onSuccess)
            .catch(this.onError);
    }

    onSuccess(response) {
        if (response.data.status === 401) {
            history.push('/login');
        }
        return response.data;
    }

    onError(error) {
        if (error.response) {
            console.error('Status: ', error.response.status);
            console.error('Date: ', error.response.data);
            console.error('Headers: ', error.response.headers);
        } else {
            console.error('Error Message: ', error.message);
        }
    }

    prepareParams(params) {
        const newParams = {};

        if (params) {
            for (const key in params) {
                console.log(key);
                // GET 请求的一些优化，空的默认的都不传
                // if (params[key] === '' || params[key] === null) {
                //     continue;
                // }
                // if (key === 'page' && params[key] === 1) {
                //     continue;
                // }
                // if (key === 'per_page' && params[key] === config.data.pagination.per_page) {
                //     continue;
                // }

                newParams[key] = params[key];
            }
        }

        return newParams;
    }
}
export default new HttpClient();
