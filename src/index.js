import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'sweetalert2/src/sweetalert2.scss';
import '@kenshooui/react-multi-select/dist/style.css';
import 'antd/dist/antd.css';
import './stylesheet/global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = {
  colors: {
    primary: '#696ffb',
    secondary: '#dfe8fb',
    success: '#28a745',
    danger: '#db504a',
    warning: '#ff6f59',
    info: '#857bff',
    light: '#f8f9fa',
    dark: '#223c61',
    textnormal: '#212529',
    white: '#FFFFFF',
    gray: '#d9d9d9',
    muted: '#dfe8fb',
    black50: '#00000080',
    white50: '#ffffff80',
  },
  breakpoints: {
    phone: '576px',
    tablet: '768px',
    desktop: '1024px',
    monitor: '1200px',
  },
  devices: {
    xsphone: '(max-width: 320px)',
    smphone: '(min-width: 576px)',
    phone: '(min-width: 576px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1024px)',
    monitor: '(min-width: 1200px)',
  },
};

ReactDOM.render(
  // <React.StrictMode> // ทำให้มีปัญหาเวลาใช้ hook useLocation() ของ react-router-dom
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
