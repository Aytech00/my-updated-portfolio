import React from "react";
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer_wrap}>
      <hr className={styles.footer_line} />

      <p className={styles.footer_text}>© 2022 Ayokunumi</p>
    </footer>
  );
};

export default Footer;
