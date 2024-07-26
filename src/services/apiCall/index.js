import { useAuthStore } from '@/services/zustandStore';
const apiUrl = import.meta.env.VITE_API_URL;


async function handleResponse(response) {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  return response.json();
}

function getToken() {
  const state = useAuthStore.getState();
  return state.token || localStorage.getItem('token') || '';
}

async function apiCall(endpoint, method = 'GET', data = null) {
  const url = `${apiUrl}${endpoint}`;
  const token = getToken();

  const options = {
    method,
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  };

  if (data) {
    if (data instanceof FormData) {
      options.body = data;
    } else {
      options.headers['Content-Type'] = 'application/json';
      options.body = JSON.stringify(data);
    }
  }

  try {
    const response = await fetch(url, options);
    return await handleResponse(response);
  } catch (error) {
    console.error(`Error with ${method} request to ${endpoint}:`, error);
  }
}

export function getData(endpoint) {
  return apiCall(endpoint, 'GET');
}

export function postData(endpoint, data) {
  return apiCall(endpoint, 'POST', data);
}

export function putData(endpoint, data) {
  return apiCall(endpoint, 'PUT', data);
}
