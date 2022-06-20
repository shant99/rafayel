import styles from "./header.module.scss";
import { v4 } from "uuid";
import { SetStateAction, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Section5Ref } from "../Refs.js";
import Section2 from "../section2/Section2";

const arr: string[] = ["Home", "About Me", "Design", "Photography", "Contact"];

const Header: React.FC = () => {
  const [buttonIndex, setButtonIndex] = useState<number>(0);
  const [hamburger, setHamburger] = useState(false);
  const {
    home,
    aboutMe,
    design,
    photography,
    contact,
    homeIsVisible,
    aboutMeIsVisible,
    designIsVisible,
    photographyIsVisible,
    contactIsVisible,
  } = useSelector((state: any) => state.reducer);
  const dispatch = useDispatch();


  const navButtonClickHandler = (
    index: SetStateAction<number>,
    item: string
  ): void => {
    console.log( aboutMe.height, "aboutME");
    setButtonIndex(index);
    setHamburger(false);
    let itemValue = item.toLowerCase().replace(/\s/g, "");
    if (home.name === itemValue) {
      window.scroll({
        behavior: "smooth",
        top: home.height,
      });
    } else if (aboutMe.name === itemValue) {
      window.scroll({
        behavior: "smooth",
        top: aboutMe.height + 10,
      });
    } else if (design.name === itemValue) {
      window.scroll({
        behavior: "smooth",
        top: design.height + 60,
      });
    } else if (photography.name === itemValue) {
      window.scroll({
        behavior: "smooth",
        top: photography.height + 60,
      });
    } else if (contact.name === itemValue) {
      window.scroll({
        behavior: "smooth",
        top: contact.height + 60 ,
      });
    }
  };

  const hamburgerHandler = (e: any) => {
    setHamburger((prev) => !prev);
  };

  const hamburgerActive = hamburger
    ? styles["menu-button-wrapper-active"]
    : styles[""];

  const menuActive = hamburger ? styles["menu-active"] : styles[""];

  useEffect(() => {
      if (homeIsVisible) {
        setButtonIndex(0);
      } else if (aboutMeIsVisible) {
        setButtonIndex(1);
      } else if (designIsVisible) {
        setButtonIndex(2);
      }else if (contactIsVisible) {
        setButtonIndex(4);
      } else if (photographyIsVisible) {
        setButtonIndex(3);
      }  

  }, [
    dispatch,
    homeIsVisible,
    aboutMeIsVisible,
    designIsVisible,
    photographyIsVisible,
    contactIsVisible,
  ]);

  return (
    <div className={styles["header-container"]}>
      <div className={styles["header"]}>
        <div
          className={styles["menu-button-wrapper"] + " " + hamburgerActive}
          onClick={hamburgerHandler}
        >
          <span className={styles["menu-button"]}></span>
        </div>
        <div className={styles["header-nav-buttons"] + " " + menuActive}>
          <ul>
            {arr.map((item, index) => (
              <li key={v4()}>
                <button
                  key={v4()}
                  onClick={() => navButtonClickHandler(index, item)}
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
