import { React, useState } from "react";
import img from "../Images/mypic.jpg";
import styles from "./Sidebar.module.css";
import * as FaIcons from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setOpen] = useState(true);

  const menuToggler = () => {
    setOpen(!isOpen);
  };

  return (
    
    <div className={styles.main_wrap}>
      <div className={styles.toggle_btn_wrap}>
        <FaIcons.FaAlignLeft className={styles.toggle_icon} onClick={menuToggler} />
      </div>

 

    

      <nav className={`${styles['sidebar_wrap']} ${!isOpen && styles.active}`}>

     
      
        <div className={styles.close_icon_wrap}>
          <FaIcons.FaRegTimesCircle className={styles.close_icon} onClick={menuToggler} />
        </div>
      

        <div className={styles.img_wrap}>
          <img src={img} className={styles.img} alt="/" />
        </div>

        <hr  className={styles.border_line}/>

        

        <ul className={styles.ul_wrap}>
          <li className={styles.li_wrap}>
            <a href="/" className={styles.menu_item}>
              Home
            </a>
          </li>
          <li className={styles.li_wrap}>
            <a href="/" className={styles.menu_item}>
              About Me
            </a>
          </li>
          <li className={styles.li_wrap}>
            <a href="/" className={styles.menu_item}>
              Portfolio
            </a>
          </li>
          <li className={styles.li_wrap}>
            <a href="/" className={styles.menu_item}>
              Resume
            </a>
          </li>
        </ul>

       
     
      </nav>

      
    
    
    </div>
    
  );
};

export default Sidebar;
