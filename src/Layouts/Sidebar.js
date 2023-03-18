import { React, useState } from "react";
import img from "../Assets/mypic.jpg";
import styles from "./Sidebar.module.css";
import * as FaIcons from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setOpen] = useState(true);

  const menuToggler = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div>
        <div className={styles.main_wrap}>
          <div className={styles.toggle_btn_wrap}>
            <FaIcons.FaAlignLeft
              className={styles.toggle_icon}
              onClick={menuToggler}
            />
          </div>

          <div className={styles.container}>
            <nav
              className={`${styles["sidebar_wrap"]} ${
                !isOpen && styles.active
              }`}
            >
              <div className={styles.close_icon_wrap}>
                <FaIcons.FaRegTimesCircle
                  className={styles.close_icon}
                  onClick={menuToggler}
                />
              </div>

              <div className={styles.img_wrap}>
                <img src={img} className={styles.img} alt="/" />
              </div>

              <hr className={styles.border_line} />

              <ul className={styles.ul_wrap}>
                <li className={styles.li_wrap}>
                  <Link to="/" className={styles.menu_item}>
                    HOME
                  </Link>
                </li>
                <li className={styles.li_wrap}>
                  <Link to="/about" className={styles.menu_item}>
                    ABOUT ME
                  </Link>
                </li>
                <li className={styles.li_wrap}>
                  <Link to="/Portfolio" className={styles.menu_item}>
                    PORTFOLIO
                  </Link>
                </li>
                <li className={styles.li_wrap}>
                  <Link to="/resume" className={styles.menu_item}>
                    BLOG
                  </Link>
                </li>

                <li className={styles.li_wrap}>
                  <Link to="/contact" className={styles.menu_item}>
                    CONTACT
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Sidebar;
