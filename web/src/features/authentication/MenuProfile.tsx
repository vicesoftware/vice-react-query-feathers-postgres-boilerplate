import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import { useAuth0 } from "@auth0/auth0-react";

const LogInLink = () => {
    const { loginWithRedirect } = useAuth0();
  
    return <Nav.Link href="#link" onClick={() => loginWithRedirect()}>Log In</Nav.Link>;
  };
  
  const LogoutLink = () => {
    const { logout } = useAuth0();
  
    return (
        <Nav.Link href="#link" onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </Nav.Link>
    );
  };
  
  export const AuthenticationLinks = () => {
    const { isAuthenticated } = useAuth0();
  
    return (
      <>
        {isAuthenticated ? <LogoutLink/> : <MenuProfile/> }
      </>
    )
  };

  export const MenuProfile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
      <>
      {isAuthenticated ? (
        <NavDropdown title={user.name} id="basic-nav-dropdown">
          <LogoutLink/>
        </NavDropdown>
      ) : <LogInLink/>} 
      </>
    );
  };