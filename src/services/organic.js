import { API_HOST } from "../config";

export function loadCategories() {
  const endPoint = `${API_HOST}/ekart/categories`;

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

export function loadOrders(phone) {
  const endPoint = `${API_HOST}/ekart/orders/${phone}`;

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
  const endPoint = `${API_HOST}/ekart/users/${phone}`;
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

export function callRegisterApi(data) {
  const endPoint = `${API_HOST}/ekart/userRegister`;

  return fetch(endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
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

export function callLoginApi(data) {
  const endPoint = `${API_HOST}/ekart/getLogin`;

  return fetch(endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
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

export function getOtp(phone) {
  const endPoint = `${API_HOST}/ekart/getotp/${phone}`;
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

export function loadStatus(phone) {
  const endPoint = `${API_HOST}/ekart/getstatus/${phone}`;
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
  const endPoint = `${API_HOST}/ekart/processOrder`;

  return fetch(endPoint, {
    body: JSON.stringify(order),
    method: "post",
  })
    .then((response) => response.json())
    .catch((error) => {
      return error.json().then((json) => {
        throw json;
      });
    });
}

export function checkDeliveryArea(pincode) {
  const endPoint = `${API_HOST}/ekart/deliverycheck/${pincode}`;

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

export function loadAreas() {
  const endPoint = `${API_HOST}/ekart/areas`;

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
