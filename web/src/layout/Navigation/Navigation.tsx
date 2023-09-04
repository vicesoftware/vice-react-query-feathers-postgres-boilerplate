import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import {
  ROUTE_VIEW_POSTS,
  ROUTE_VIEW_USERS,
  ROUTE_VIEW_ABOUT,
} from '../../routes';

export const Navigation = () => (
  <Container className="p-5">
    <Row>
      <Col>
        <Link to={ROUTE_VIEW_POSTS}>Posts</Link>
      </Col>
      <Col>
        <Link to={ROUTE_VIEW_USERS}>Users</Link>
      </Col>
      <Col>
        <Link to={ROUTE_VIEW_ABOUT}>About</Link>
      </Col>
    </Row>
  </Container>
);
