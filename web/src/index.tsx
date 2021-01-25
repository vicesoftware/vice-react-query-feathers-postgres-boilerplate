import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query'
import { Auth0Provider } from "@auth0/auth0-react";
import { ReactQueryDevtools } from 'react-query/devtools'
import 'bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient()

const isDevelopment = process.env.NODE_ENV === 'development';

ReactDOM.render(

    <React.StrictMode>
      <Auth0Provider
        domain="vice-react-query-feathers-boilerplate.us.auth0.com"
        clientId="sU7j9kc4TzG2nt07WVuWAuTQDmBuPt5i"
        redirectUri={window.location.origin}
      >
        <QueryClientProvider client={queryClient}>
          <App />
          {isDevelopment && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
      </Auth0Provider>,
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
