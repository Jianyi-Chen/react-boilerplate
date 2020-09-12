import { axiosOptions } from '@/common/config';
import axios from 'axios';

const axiosInstance = axios.create(axiosOptions);

axiosInstance.interceptors.request.use(
  (config) => {
    //TODO: 页面loading / token鉴权
    return config;
  },
  (err) => err
);

axiosInstance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (err && err.response) {
      //TODO: 错误处理 ❌
    }
    return err;
  }
);

export default axiosInstance;
