import apiFetch from '@wordpress/scripts/api-fetch';

const ENDPOINT_BASE = '/spacex/v1';

export const getRockets = async () => {
  const response = await apiFetch({ path: `${ENDPOINT_BASE}/rockets` });
  const rockets = await response.json();
  return rockets;
};

export const getCapsules = async () => {
  const response = await apiFetch({ path: `${ENDPOINT_BASE}/capsules` });
  const capsules = await response.json();
  return capsules;
};
