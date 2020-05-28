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