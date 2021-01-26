import * as React from 'react';
import { Profile, AuthenticationButton } from './features/authentication';
import { ApiStatusIndicator } from './features/apiStatusIndicator';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile/>
        <AuthenticationButton/>
        <ApiStatusIndicator/>
      </header>
    </div>
  );
}

export default App;
