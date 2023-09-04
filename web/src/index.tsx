import dotenv from 'dotenv';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query'
import { Auth0Provider } from "@auth0/auth0-react";
import { ReactQueryDevtools } from 'react-query/devtools'
import 'bootstrap/dist/css/bootstrap.min.css';

dotenv.config();

const queryClient = new QueryClient()

const isDevelopment = process.env.NODE_ENV === 'development';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

if (!domain) {
  throw new Error('You must defined the env var REACT_APP_AUTH0_DOMAIN. For local development you can do this in your local .env file');
}

if (!clientId) {
  throw new Error('You must defined the env var REACT_APP_AUTH0_CLIENT_ID. For local development you can do this in your local .env file');
}

ReactDOM.render(

    <React.StrictMode>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
        audience='https://vice-react-query-feathers-boilerplate-api-hs'
      >
        <QueryClientProvider client={queryClient}>
          <App />
          {isDevelopment && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
      </Auth0Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
