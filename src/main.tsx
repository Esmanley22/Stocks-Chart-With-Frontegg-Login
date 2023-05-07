import './css/bootstrap.scss';
import * as React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import { FronteggProvider } from '@frontegg/react';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom'


const contextOptions = {
  baseUrl: 'https://app-j449pk9fj81q.frontegg.com',
  clientId: '1d79f1be-0d5b-402c-be77-9d31c2ae28ee'
};


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
  <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
    <App />
  </FronteggProvider>
  </HashRouter>
);
