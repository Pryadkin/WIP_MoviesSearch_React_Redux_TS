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
      <Navbar.Brand className={styles.navbar_brand}>
        Home
      </Navbar.Brand>
      <Nav className={`${styles.navlink} mr-auto`}>
        <Link to="/profile" className={styles.active}>
          Home
        </Link>

        <Link to="/search">
          Search
        </Link>
      </Nav>
    </Navbar >
  )
}

export default ProfileNavbar;