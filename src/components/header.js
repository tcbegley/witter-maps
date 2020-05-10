import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Container from 'react-bootstrap/container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Header = ({ siteTitle }) => (
  <Navbar bg="dark" variant="dark" expand="sm">
    <Container>
      <span className="navbar-brand">{siteTitle}</span>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link" activeClassName="active">
            Home
          </Link>
          <Link to="/map" className="nav-link" activeClassName="active">
            Map
          </Link>
          <Link to="/about" className="nav-link" activeClassName="active">
            About
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
