import { React } from "react";
import styles from "./Home.module.css";
// import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import SideBar from "../Components/Sidebar";
import * as FaIcons from "react-icons/fa";

const Home = () => {

  return (
    <div>
      <div className={styles.main_content}>
        <SideBar />

        <div className={styles.inner_main_content}>
          <div>
            <div className={styles.title_wrap}>
              <h1 className={styles.title}>
                Hi,I am <span className={styles.name_wrap}>Toluwani</span>
              </h1>
            </div>

            <div className={styles.text_wrap}>
              <p className={styles.text}>
                I am a frontend web developer. I can provide clean code and
                pixel perfect design. I also make website more & more
                interactive with web animations.
              </p>
            </div>

            <ul className={styles.icon_wrap}>
              <a href="https://www.linkedin.com/feed/">
                <li className={styles.linkedin_icon_wrap}>
                  <FaIcons.FaLinkedinIn className={styles.linkedin_icon} />
                </li>
              </a>

              <a href="https://twitter.com/Aytechng">
                <li className={styles.twitter_icon_wrap}>
                  <FaIcons.FaTwitter className={styles.twitter_icon} />
                </li>
              </a>
              <a href="https://github.com/Aytech00">
                <li className={styles.github_icon_wrap}>
                  <FaIcons.FaGithub className={styles.github_icon} />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
