import * as React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';

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
  
  export const AuthenticationButton = () => {
    const { isAuthenticated } = useAuth0();
  
    return (
      <>
        {isAuthenticated ? <LogoutButton/> : <LoginButton/> }
      </>
    )
  };
