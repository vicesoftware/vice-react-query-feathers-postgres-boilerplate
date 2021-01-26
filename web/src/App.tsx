import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import MenuBar from './layout/MenuBar';
import { ApiStatusIndicator } from './features/apiStatusIndicator';
import './App.css';

function App() {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    (async () => {
      try {
        // I'm currently getting a consent error from Auth0.
        // This link might be relevant: https://community.auth0.com/t/how-to-gettokensilently-without-consent-on-localhost/39183/2
        const token = await getAccessTokenSilently({
          audience: 'https://vice-react-query-feathers-boilerplate-api',
          scope: 'openid profile email'
        });

        console.log(token);

      } catch (e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently]);

  return (
    <div className="App">
    <MenuBar/>
    <ApiStatusIndicator/>
    </div>
  );
}

export default App;
