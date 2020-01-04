import axios from 'axios';

class DataProviderInstance {
  static createAxiosInstance(baseURL) {
    return axios.create({
      baseURL: baseURL,
    });
  }
}

export default DataProviderInstance;
