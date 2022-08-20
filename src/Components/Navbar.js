import React from "react";
import styles from "./navbar.module.css";
import Instagram from "./Images/instagram-text-icon.svg";
import searchLogo from "./Images/search-logo.svg";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.sizeDiv}>
        <img
          className={styles.textLogo}
          src={Instagram}
          alt="instagram-text-logo"
        />
        <div className={styles.searchBox}>
          <input
            className={styles.search}
            type="text"
            name="search"
            placeholder="Search"
          />
          <img
            className={styles.searchBtn}
            src={searchLogo}
            alt="instagram-text-logo"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
