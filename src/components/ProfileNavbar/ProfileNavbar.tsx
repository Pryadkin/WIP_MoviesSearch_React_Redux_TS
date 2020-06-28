import React from 'react';
import { Link } from 'react-router-dom';

// styles
import styles from "./ProfileNavbar.module.scss";
import { Navbar, Nav } from 'react-bootstrap';

const ProfileNavbar = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className={styles.navbar}
    >
      <Navbar.Brand>
        Home
      </Navbar.Brand>
      <Nav className="mr-auto">
        {/* <Nav.Link active> */}
        <Link to="/profile">
          Home
          </Link>
        {/* </Nav.Link> */}

        {/* <Nav.Link> */}
        <Link to="/search">
          Search
          </Link>
        {/* </Nav.Link> */}
      </Nav>
    </Navbar >
  )
}

export default ProfileNavbar;