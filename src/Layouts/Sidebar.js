import { React, useState } from "react";
import img from "../Assets/mypic.jpg";
import styles from "./Sidebar.module.css";
import * as FaIcons from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isOpen, setOpen] = useState(true);

  const menuToggler = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="md:grid md:grid-cols-sidebar   ">
      <div className={styles.main_wrap}>
        <div className={styles.toggle_btn_wrap}>
          <FaIcons.FaAlignLeft
            className={styles.toggle_icon}
            onClick={menuToggler}
          />
        </div>

        <div className={ ` ${styles.container} font-main`}>
          <nav
            className={`${styles["sidebar_wrap"]} ${!isOpen && styles.active}`}
          >
            <div className={styles.close_icon_wrap}>
              <FontAwesomeIcon
                className={styles.close_icon}
                onClick={menuToggler}
                icon={faXmark}
              />
            </div>

            <div className="flex justify-center  mb-6 lg:py-7 ">
              <img
                src={img}
                className="w-[150px]  border-[3px] border-[#ccccccde] rounded-full h-[155px]"
                alt="/"
              />
            </div>

            <hr className={styles.border_line} />

            <ul className={styles.ul_wrap}>
              <li className={styles.li_wrap}>
                <Link to="/" className={styles.menu_item}>
                  Home
                </Link>
              </li>
              <li className={styles.li_wrap}>
                <Link to="/about" className={styles.menu_item}>
                  About me
                </Link>
              </li>
              <li className={styles.li_wrap}>
                <Link to="/Portfolio" className={styles.menu_item}>
                  My Portfolio
                </Link>
              </li>

              <li className={styles.li_wrap}>
                <Link to="/contact" className={styles.menu_item}>
                  Contact
                </Link>
              </li>
              <li className={styles.li_wrap}>
                <Link to="/blog" className={styles.menu_item}>
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;
