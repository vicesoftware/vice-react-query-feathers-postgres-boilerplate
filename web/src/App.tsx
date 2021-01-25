import React from 'react';
import { useQuery } from 'react-query'
import Badge from 'react-bootstrap/Badge'
import logo from './logo.svg';
import './App.css';

function App() {
  const isHealthyQuery = useQuery('healthCheck', () =>     
    fetch('health-check')
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        return false;
      })
      .then(json => json.isHealthy)
      .catch(e => {
        console.log(e);
        return false;
      })
  , { refetchInterval: 500 });

  const isHealthy = isHealthyQuery?.data || false;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Badge variant={isHealthy ? 'success' : 'danger'}>{isHealthy ? "API is healthy": "API is not healthy"}</Badge>
      </header>
    </div>
  );
}

export default App;
