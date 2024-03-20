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

  const handleClose = ()=> {

    console.log(isOpen);
setOpen(!isOpen)
 
  }

  return (
    <div className="md:grid md:grid-cols-sidebar  lg:grid-cols-sidebar 2xl:grid-cols-xlsidebar  ">
      <div className={styles.main_wrap}>
        <div
          className={` ${styles.toggle_btn_wrap} bg-transparent `}
        >
          <FaIcons.FaAlignLeft
            className={`${styles.toggle_icon} text-slate-50`}
            onClick={menuToggler}
          />
        </div>

        <div className={` ${styles.container} font-main`}>
          <nav
            className={`${styles["sidebar_wrap"]} ${
              !isOpen ? styles.active : ""
            } `}
          >
            <div className={` ${styles.close_icon_wrap} text-slate-50`}>
              <FontAwesomeIcon
                className={styles.close_icon}
                onClick={menuToggler}
                icon={faXmark}
              />
            </div>

            {/* <div className="flex justify-center  mb-6 lg:py-7 ">
              <img
                src={img}
                className="w-[155px]  border-[4px] border-slate-200 rounded-full h-[160px]"
                alt="/"
              />
            </div> */}

            <hr className={`mt-10 ${styles.border_up}`}/>

            <ul className={styles.ul_wrap}>
              <li onClick={handleClose} className={styles.li_wrap}>
                <Link to="/" className={styles.menu_item}>
                  Home
                </Link>
              </li>
              <li onClick={handleClose} className={styles.li_wrap}>
                <Link to="/about" className={styles.menu_item}>
                  About me
                </Link>
              </li>
              <li onClick={handleClose} className={styles.li_wrap}>
                <Link to="/Portfolio" className={styles.menu_item}>
                  My Portfolio
                </Link>
              </li>

              <li onClick={handleClose} className={styles.li_wrap}>
                <Link to="/contact" className={styles.menu_item}>
                  Contact
                </Link>
              </li>
              <li onClick={handleClose} className={styles.li_wrap}>
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
