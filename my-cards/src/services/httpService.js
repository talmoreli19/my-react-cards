// httpService.js
import axios from 'axios';
import config from '../config.json';

const instance = axios.create({
  baseURL: config.apiUrl,
});

export function setCommonHeader(headerName, headerValue) {
  instance.defaults.headers.common[headerName] = headerValue;
}

const httpService = {
  get: (url, config) => instance.get(url, config),
  post: (url, data, config) => instance.post(url, data, config),
  patch: (url, data, config) => instance.patch(url, data, config),
  put: (url, data, config) => instance.put(url, data, config),
  delete: (url, config) => instance.delete(url, config),
  setCommonHeader,
};

export default httpService;
