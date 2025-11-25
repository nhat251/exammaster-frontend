import axios from 'axios';
import { ROOT_URL, ACCESS_TOKEN_KEY_STORAGE, REFRESH_TOKEN_ENDPOINT } from '~/constants/my_const';

const api = axios.create({
  baseURL: ROOT_URL,
  timeout: 10000,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY_STORAGE);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401) {
      const isRefreshRequest = originalRequest.url?.includes(REFRESH_TOKEN_ENDPOINT);

      if (isRefreshRequest) {
        localStorage.removeItem(ACCESS_TOKEN_KEY_STORAGE);
        return Promise.reject(error);
      }

      if (!originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const { accessToken } = await api.post(REFRESH_TOKEN_ENDPOINT).then((res) => res.data.result);
          // const accessToken = await refresh();

          localStorage.setItem(ACCESS_TOKEN_KEY_STORAGE, accessToken);

          return api(originalRequest);
        } catch (refreshError) {
          localStorage.removeItem(ACCESS_TOKEN_KEY_STORAGE);

          // Dispatch custom event để trigger logout từ AuthProvider
          window.dispatchEvent(new CustomEvent('auth:logout'));

          return Promise.reject(refreshError);
        }
      }
    }

    return Promise.reject(error);
  },
);

const callApi = async ({ path, method = 'GET', data, config }) => {
  try {
    let response;

    switch (method.toUpperCase()) {
      case 'GET':
        response = await api.get(path, config);
        break;

      case 'POST':
        response = await api.post(path, data, config);
        break;

      case 'PUT':
        response = await api.put(path, data, config);
        break;

      case 'PATCH':
        response = await api.patch(path, data, config);
        break;

      case 'DELETE':
        response = await api.delete(path, { ...config, data });
        break;

      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }

    return response.data;
  } catch (error) {
    console.error(`❌ Error calling API [${method}] ${path}:`, error);
    throw error;
  }
};

export default callApi;
