import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from 'react-query';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import MenuBar from './layout/MenuBar';
import { Navigation } from './layout/Navigation';

import { ApiStatusIndicator } from './features/apiStatusIndicator';

import { Posts } from './views/Posts';

import { Item } from './components/ListOfItems';

import {
  ROUTE_VIEW_POSTS,
  ROUTE_VIEW_USERS,
  ROUTE_VIEW_ABOUT,
} from './routes';

import './App.css';

function App() {
  const { getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState<string>();

  useEffect(() => {
    (async () => {
      try {
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
      headers: new Headers({ 'accept': 'application/json', 'authorization': `Bearer ${accessToken}` }),
    });

    if (!response.ok) {
      console.log('Error calling api', JSON.stringify(response));
      return;
    }

    const result = await response.json();

    return result;
  }, {
    // The query will not execute until the userId exists
    enabled: !!accessToken,
  });

  const posts: Item[] = [
    {
      id: 1,
      title: 'Titulo mamalon 1',
      url: '/somewhere...',
      content: 'lorem ipsum 4',
    },
    {
      id: 2,
      title: 'Titulo mamalon 2',
      url: '/somewhere...',
      content: 'lorem ipsum 4',
    },
    {
      id: 3,
      title: 'Titulo mamalon 3',
      url: '/somewhere...',
      content: 'lorem ipsum 4',
    },
    {
      id: 4,
      title: 'Titulo mamalon 4',
      url: '/somewhere...',
      content: 'lorem ipsum 4',
    },
  ];

  return (
    <div className="App">
      <MenuBar />
      <ApiStatusIndicator />
      <Router>
        <Navigation />
        <Switch>
          <Route path={ROUTE_VIEW_POSTS} exact={true}>
            <Posts items={posts} />
          </Route>
          <Route path={ROUTE_VIEW_USERS} exact={true}>
            <h1>This should contain the users view</h1>
          </Route>
          <Route path={ROUTE_VIEW_ABOUT} exact={true}>
            <h1>This should contain the about view</h1>
          </Route>
          <Route path="*">
            <Redirect to={ROUTE_VIEW_POSTS} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
