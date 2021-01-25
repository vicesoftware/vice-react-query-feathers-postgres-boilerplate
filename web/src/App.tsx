import React, { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge'
import logo from './logo.svg';
import './App.css';

function App() {
  const [isHealthy, setIsHealthy] = useState(false);
  
  useEffect(() => {
    fetch('health-check')
      .then(r => r.json())
      .then(j => {
        setIsHealthy(j.isHealthy);
      });
  }, [setIsHealthy])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Badge variant={isHealthy ? 'success' : 'danger'}>{isHealthy ? "API is healthy": "API is not healthy"}</Badge>
      </header>
    </div>
  );
}

export default App;
