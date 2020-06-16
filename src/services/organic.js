import { API_HOST } from '../config';

export function loadCategories() {
    const endPoint = `${API_HOST}/categories`;

    return fetch(endPoint)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .catch((error) => {
            return Promise.reject(error);
        });
}

export function loadOrders() {
    const endPoint = `${API_HOST}/orders`;

    return fetch(endPoint)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .catch((error) => {
            return Promise.reject(error);
        });
}

export function loadUser(phone) {
    const endPoint = `${API_HOST}/users:${phone}`;
    return fetch(endPoint)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .catch((error) => {
            return Promise.reject(error);
        });
}