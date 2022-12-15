import {React, useState} from "react";
import styles from "./Sidebar.module.css";
import img from "../Images/mypic.jpg";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import About from './Lists/About'


const Sidebar = () => {

  const [isAbout, setAbout] = useState(false)

  const aboutHandler = () =>{
    setAbout(true)
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <div className={styles.profilepic_wrap}>
            <a href="/" className={styles.profilepic_link_wrap}>
              <img src={img} className={styles.profilepic} alt="" />
            </a>
          </div>
          <hr className={styles.line} />
          
            <ul className={styles.ul_wrap}>
              <li className={styles.list_wrap}>
                <a  className={styles.link} href="/">
                  HOME
                </a>
              </li>
              <li className={styles.list_wrap}>
                <a className={styles.link} onClick={aboutHandler} href="/">
                  ABOUT
                </a>
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
            

            {/* FOOTER */}

            <footer className={styles.footer_wrap}>
            <hr className={styles.line} />
              <p className={styles.footer_text}>© 2022 Ayokunumi</p>
            </footer>
       
        </div>
      </div>

      <div className={styles.main_content}>
        <div className={styles.inner_main_content}>
          {isAbout ? <About/> :
          <div>
            <div className={styles.title_wrap}>
              <h1 className={styles.title}>
                Hi, I am <span className={styles.name_wrap}>Toluwani</span>{" "}
              </h1>
            </div>

            <div className={styles.text_wrap}>
              <p className={styles.text}>
                I am a frontend web developer. I can provide clean code and
                pixel perfect design. I also make website more & more
                interactive with web animations.
              </p>
            </div>

            <div className={styles.icon_wrap}>
             
              <a href="https://www.linkedin.com/feed/" className={styles.linkedin_icon}>
            
                <FaLinkedinIn />
             
              </a>

              
             
              <a href="https://twitter.com/Aytechng" className={styles.twitter_icon}>
                <FaTwitter />
              </a>
              <a href="https://github.com/Aytech00" className={styles.github_icon}>
                <FaGithub />
              </a>
            </div>
          </div> 

        }
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
