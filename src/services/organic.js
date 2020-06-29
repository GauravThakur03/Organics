import { API_HOST } from '../config';

export function loadCategories() {
    const endPoint = `${API_HOST}/ecart/categories`;

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
    const endPoint = `${API_HOST}/ecart/orders`;

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
    const endPoint = `${API_HOST}/ecart/users/${phone}`;
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

export function processOrder(order, phone) {
    const endPoint = `${API_HOST}/ecart/processOrder/${phone}`;

    return fetch(endPoint, {
        body: JSON.stringify(order),
        method: 'post'
    })
    .then((response) => response.json())
    .catch((error) => {
        return error.json().then((json) => {
            throw json;
        });
    });
}