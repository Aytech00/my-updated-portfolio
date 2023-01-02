import { React, useState } from "react";
import img from "../Images/mypic.jpg";
import styles from "./Sidebar.module.css";
import Footer from "./Footer";
import { FaAlignJustify } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);

  const menuToggler = () => {
    setOpen(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <div className={styles.main_toggle_btn_wrap}>
          <button className={styles.toggle_wrap} onClick={menuToggler}>
            <FaAlignJustify />
          </button>
        </div>
        <div className={styles.profilepic_wrap}>
          <a href="/" className={styles.profilepic_link_wrap}>
            <img src={img} className={styles.profilepic} alt="" />
          </a>
        </div>
        <hr className={styles.list_line} />

        <ul className={styles.ul_wrap}>
          <li className={styles.list_wrap}>
            <a className={styles.link} href="/">
              HOME
            </a>
          </li>
          <li className={styles.list_wrap}>
            <div className={styles.link} href="/">
              ABOUT
            </div>
          </li>
          <li className={styles.list_wrap}>
            <a className={styles.link} href="/">
              RESUME
            </a>
          </li>
          <li className={styles.list_wrap}>
            <a className={styles.link} href="/">
              PORTFOLIO
            </a>
          </li>
          <li className={styles.list_wrap}>
            <a className={styles.link} href="/">
              CONTACT
            </a>
          </li>
        </ul>


        <Footer />
      </div>
    </div>
  );
};

export default Sidebar;
