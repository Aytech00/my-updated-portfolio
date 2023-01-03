import React from "react";
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <footer className={styles.footer_wrap}>
        <hr className={styles.footer_line} />

        <p className={styles.footer_text}>© 2022 Ayokunumi</p>
      </footer>
    </div>
  );
};

export default Footer;
