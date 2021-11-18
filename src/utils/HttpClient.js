/* eslint-disable no-else-return */
/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios';
import join from 'url-join';
import Swal from 'sweetalert2';
const isAbsoluteURLRegex = /^(?:\w+:)\/\//;

axios.interceptors.request.use(async (config) => {
  if (!isAbsoluteURLRegex.test(config.url)) {
    if (process.env.APP_ENV !== 'development') {
      config.url = join(`${process.env.REACT_APP_API_HTTP}`, config.url);
    } else {
      config.url = join(`${process.env.REACT_APP_API_URL}`, config.url);
    }
  }
  // if (localStorage.getItem('RefreshToken') && localStorage.getItem('auth')) {
  //   config.headers.Authorization = `Bearer ${localStorage.getItem('auth')}`;
  //   config.headers.refreshtoken = `${localStorage.getItem('RefreshToken')}`;
  // }

  // config.timeout = 15000; // 15 Second
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // console.log(error.response)
      if (error.code === 'ECONNABORTED') {
        Swal.fire({
          title: 'หมดเวลาการเชื่อมต่อ',
          text: 'กรุณาลองใหม่อีกครั้ง',
          type: 'error',
          icon: 'error',
          timer: 3000,
        });
      } else if (error.response.status === 403) {
        localStorage.clear();
        Swal.fire({
          title: error.response.data.message,
          text: 'error',
          icon: 'error',
          timer: 3000,
          showCancelButton: false,
          showConfirmButton: false,
        }).then(() => {
          window.location.href = '/';
        });
      } else if (error.response.status === 401) {
        localStorage.clear();
        Swal.fire({
          title: error.response.data.message,
          text: 'error',
          icon: 'error',
          timer: 3000,
          showCancelButton: false,
          showConfirmButton: false,
        });
        window.location.href = '/';
      } else if (error.response.status === 500) {
        Swal.fire({
          title: 'Server Error',
          type: 'error',
          timer: 3000,
          icon: 'error',
          showCancelButton: false,
          showConfirmButton: false,
        });
      } else if (error.response.status === 422) {
        Swal.fire({
          title: error.response.data.message,
          type: 'error',
          timer: 3000,
          icon: 'error',
          showCancelButton: false,
          showConfirmButton: false,
        });
      } else if (error.response.status === 400) {
        Swal.fire({
          title: error.response.data.message,
          type: 'error',
          timer: 3000,
          icon: 'error',
          showCancelButton: false,
          showConfirmButton: false,
        });
      } else if (error.response.status === 404) {
        Swal.fire({
          title: error.response.data.message,
          type: 'error',
          timer: 3000,
          icon: 'error',
          showCancelButton: false,
          showConfirmButton: false,
        });
      }
    } else if (error.response.status === 429) {
      Swal.fire({
        text:
          'Too many login attempts from your address. Please wait 5 minutes before trying again.',
        type: 'error',
        timer: 3000,
        icon: 'error',
        showCancelButton: false,
        showConfirmButton: false,
      });
    }
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    } else if (!error.response) {
      Swal.fire({
        title: 'การเชื่อมต่อผิดพลาด',
        text: 'โปรดตรวสอบอินเตอร์เน็ตของท่าน',
        type: 'error',
        timer: 3000,
        icon: 'error',
        showCancelButton: false,
        showConfirmButton: false,
      });
      return Promise.reject({
        code: 'NOT_CONNECT_NETWORK',
        message: 'NETWORK_CONNECTION_MESSAGE',
      });
    }
    return Promise.reject(error);
  },
);

export const httpClient = axios;
