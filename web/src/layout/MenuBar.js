import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { MenuProfile } from '../features/authentication';

const MenuBar = () => {
  return (
    <Navbar>
      <Navbar.Brand href="/">
        <img
          src="/logo.svg"
          width="150"
          height="50"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <MenuProfile />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MenuBar;
