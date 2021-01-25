import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { ApiStatusIndicator } from './features/apiStatusIndicator';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button className='mb-2' onClick={() => loginWithRedirect()}>Log In</Button>;
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button className='mb-2' onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Button>
  );
};

const AuthButtons = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? <LogoutButton/> : <LoginButton/> }
    </>
  )
};

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
    {isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <p>{user.email}</p>
      </div>
    )} 
    </>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile/>
        <AuthButtons/>
        <ApiStatusIndicator/>
      </header>
    </div>
  );
}

export default App;
