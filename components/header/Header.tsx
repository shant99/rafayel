import styles from "./header.module.scss";
import { v4 } from "uuid";
import { SetStateAction, useState } from "react";

const arr: string[] = ["Home", "About Me", "Design", "Photography", "Contact"];

const Header: React.FC = () => {
  const [buttonIndex, setButtonIndex] = useState<number>(0);

  const navButtonClickHandler = (index: SetStateAction<number>): void =>
    setButtonIndex(index);

  return (
    <div className={styles["header-container"]}>
      <div className={styles["header"]}>
        <div className={styles["header-nav-buttons"]}>
          {arr.map((item, index) => (
            <button
              onClick={() => navButtonClickHandler(index)}
              key={v4()}
              className={
                styles["nav-button"] +
                " " +
                (index === buttonIndex
                  ? styles["nav-button-active"]
                  : styles[""])
              }
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
