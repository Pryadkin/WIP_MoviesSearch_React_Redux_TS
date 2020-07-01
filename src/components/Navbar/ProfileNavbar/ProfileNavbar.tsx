import React from 'react';
import { NavLink } from 'react-router-dom';

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
        <NavLink to="/profile" className={styles.not_active}>
          Home
        </NavLink>

        <NavLink to="/search">
          Search
        </NavLink>
      </Nav>
    </Navbar >
  )
}

export default ProfileNavbar;