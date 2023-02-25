import { apiFetch } from '@wordpress/api-fetch';

const ENDPOINT_BASE = '/spacex/v1';

export const login = async (username, password) => {
  const response = await apiFetch({
    path: `${ENDPOINT_BASE}/auth/login`,
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};

export const logout = async () => {
  const response = await apiFetch({
    path: `${ENDPOINT_BASE}/auth/logout`,
    method: 'POST',
  });
  const data = await response.json();
  return data;
};

export const checkAuth = async () => {
  const response = await apiFetch({ path: `${ENDPOINT_BASE}/auth/check` });
  const data = await response.json();
  return data;
};
