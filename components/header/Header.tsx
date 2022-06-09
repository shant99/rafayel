import { Button, Col, Row } from "antd";
import { NextPage } from "next";
import { AppProps } from "next/app";
import styles from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles["header-container"]}>
      <nav className={styles["header"]}>
        <div className={styles["header-nav-buttons"]}>
          <button className={styles["nav-button"]}>Home</button>
          <button className={styles["nav-button"]}>About Me</button>
          <button className={styles["nav-button"]}>Design</button>
          <button className={styles["nav-button"]}>Photography</button>
          <button className={styles["nav-button"]}>Contact</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
