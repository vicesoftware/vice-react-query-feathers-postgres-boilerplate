import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import MenuBar from './layout/MenuBar';
import { ApiStatusIndicator } from './features/apiStatusIndicator';
import './App.css';
import { useQuery } from 'react-query';

function App() {
  const { getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState<string>();

  useEffect(() => {
    (async () => {
      try {
        // I'm currently getting a consent error from Auth0.
        // This link might be relevant: https://community.auth0.com/t/how-to-gettokensilently-without-consent-on-localhost/39183/2
        const token = await getAccessTokenSilently();

        console.log(token);

        setAccessToken(token);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently, setAccessToken]);

  const todosQuery = useQuery('todos', async () => {
    const response = await fetch('/todos', {
      headers: new Headers({'accept': 'application/json', 'authorization': `Bearer ${accessToken}`})
    })

    if (!response.ok) {
      console.log('Error calling api', JSON.stringify(response));
      return;
    }

    const result = await response.json();

    return result;
  },    {
    // The query will not execute until the userId exists
    enabled: !!accessToken,
  })

  console.log(todosQuery);

  return (
    <div className="App">
      <MenuBar/>
      <ApiStatusIndicator/>
    </div>
  );
}

export default App;
