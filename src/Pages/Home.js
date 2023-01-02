import { React } from "react";
import styles from "./Home.module.css";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import SideBar from "../Components/SideBar";

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
              <li className={styles.linkedin_icon_wrap}>
                <a href="https://www.linkedin.com/feed/">
                  <FaLinkedinIn className={styles.linkedin_icon} />
                </a>
              </li>

              <li className={styles.twitter_icon_wrap}>
                <a href="https://twitter.com/Aytechng">
                  <FaTwitter className={styles.twitter_icon} />
                </a>
              </li>

              <li className={styles.github_icon_wrap}>
                <a href="https://github.com/Aytech00">
                  <FaGithub className={styles.github_icon} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
