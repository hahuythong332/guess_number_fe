import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});

// Optional request interceptor (e.g., add token)
apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
}, error => Promise.reject(error));

// Optional response interceptor
apiClient.interceptors.response.use(
    response => response.data,
    error => Promise.reject(error)
);

/**
 * Generic API request
 */
const apiRequest = async (method, url, data = {}, config = {}) => {
    console.log("hht32 url", url)
    method = method.toLowerCase();
    const requestConfig = { method, url, ...config };

    if (method === 'get' || method === 'delete') {
        requestConfig.params = data;
    } else {
        requestConfig.data = data;
    }

    return apiClient(requestConfig);
};

/**
 * Shortcut methods
 */
apiRequest.get = (url, params = {}, config = {}) =>
    apiRequest('get', url, params, config);

apiRequest.post = (url, data = {}, config = {}) =>
    apiRequest('post', url, data, config);

apiRequest.put = (url, data = {}, config = {}) =>
    apiRequest('put', url, data, config);

apiRequest.delete = (url, params = {}, config = {}) =>
    apiRequest('delete', url, params, config);

export default apiRequest;
