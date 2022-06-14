import styles from "./header.module.scss";
import { v4 } from "uuid";
import { SetStateAction, useState } from "react";
import { useSelector } from "react-redux";

const arr: string[] = ["Home", "About Me", "Design", "Photography", "Contact"];

const Header: React.FC = () => {
  const [buttonIndex, setButtonIndex] = useState<number>(0);
  const { home, aboutMe, design, photography, contact } = useSelector(
    (state: any) => state.reducer
  );

  const navButtonClickHandler = (
    index: SetStateAction<number>,
    item: string
  ): void => {
    setButtonIndex(index);
    let itemValue = item.toLowerCase().replace(/\s/g, "");
    if (home.name === itemValue) {
      window.scroll({
        behavior: "smooth",
        top: home.height,
      });
    } else if (aboutMe.name === itemValue) {
      window.scroll({
        behavior: "smooth",
        top: aboutMe.height - 150,
      });
    } else if (design.name === itemValue) {
      window.scroll({
        behavior: "smooth",
        top: design.height,
      });
    } else if (photography.name === itemValue) {
      window.scroll({
        behavior: "smooth",
        top: photography.height,
      });
    } else if (contact.name === itemValue) {
      window.scroll({
        behavior: "smooth",
        top: contact.height - 200,
      });
    }
  };

  return (
    <div className={styles["header-container"]}>
      <div className={styles["header"]}>
        <div className={styles["header-nav-buttons"]}>
          {arr.map((item, index) => (
            <button
              onClick={() => navButtonClickHandler(index, item)}
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
