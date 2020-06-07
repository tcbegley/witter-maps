import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Container from 'react-bootstrap/Container'
import headerStyle from './header.module.css'

const Header = ({ siteTitle }) => (
  <Container>
    <div className="row mt-4 justify-content-center">
      <div className="col-12 col-md-auto text-center display-4 font-weight-bold">
        {siteTitle}
      </div>
      <div className="col-auto ml-md-auto align-self-center">
        <Link
          to="/"
          className={headerStyle.navLink}
          activeClassName={headerStyle.navLinkActive}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={headerStyle.navLink}
          activeClassName={headerStyle.navLinkActive}
        >
          About
        </Link>
      </div>
    </div>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
